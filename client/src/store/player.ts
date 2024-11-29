import { create } from "zustand";
import {
  PlayerType,
  PlaylistType,
  TrackType,
  RepeatType,
  RepeatTypes,
} from "@root/global-types";

const repeatTypesList = Object.keys(RepeatTypes) as RepeatType[];

type State = PlayerType;
type Actions = {
  setCurrentTrack: (
    track: TrackType,
    opts?: { playlist?: PlaylistType },
  ) => void;
  setCurrentPlaylist: (
    playlist?: PlaylistType,
    opts?: { clearCurrentTrack?: boolean },
  ) => void;
  setCurrentTrackWithPlaylist: (
    track: TrackType,
    playlist?: PlaylistType,
  ) => void;
  play: () => void;
  pause: () => void;
  stop: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  setRepeatType: (repeatType: RepeatType) => void;
  toggleRepeatType: () => void;
};

export const usePlayerStore = create<State & Actions>((set, get) => {
  const audio = new Audio();
  audio.onplay = () => set({ isPlaying: true });
  audio.onpause = () => set({ isPlaying: false });

  navigator.mediaSession.setActionHandler("previoustrack", () => {
    get().prevTrack();
    console.log("Prev track clicked");
  });
  navigator.mediaSession.setActionHandler("nexttrack", () => {
    get().nextTrack();
    console.log("Next track clicked");
  });

  return {
    audio,
    isPlaying: false,
    currentTrack: undefined,
    currentPlaylist: undefined,
    repeatType: "none",
    setCurrentTrack: async (track) => {
      if (!track.src) {
        track.src = await window.node.readFileStream(track.path);
        // error handling
      }
      audio.src = track.src || "";
      set({ currentTrack: track });
      navigator.mediaSession.metadata = new MediaMetadata({
        title: track.name,
        artist: track.name,
        album: track.name,
        artwork: [
          // { src: "album-art.jpg", sizes: "96x96", type: "image/jpeg" },
          // { src: "album-art-large.jpg", sizes: "512x512", type: "image/jpeg" },
        ],
      });
      get().play();
      // TODO: should save track to config in node
    },
    setCurrentPlaylist: async (playlist, opts) => {
      const clearCurrentTrack = !opts || opts.clearCurrentTrack;
      clearCurrentTrack
        ? set({ currentPlaylist: playlist, currentTrack: undefined })
        : set({ currentPlaylist: playlist });
    },
    setCurrentTrackWithPlaylist: async (track, playlist) => {
      const { currentPlaylist, setCurrentPlaylist, setCurrentTrack } = get();
      const isNewPlaylist = playlist?.name !== currentPlaylist?.name;
      if (isNewPlaylist) {
        setCurrentPlaylist(playlist, { clearCurrentTrack: false });
      }
      setCurrentTrack({
        ...track,
        queue:
          playlist?.items.findIndex((item) => item.name === track.name) || 0,
      });
    },
    play: () => {
      if (!get().currentTrack) return;
      audio.play();
    },
    pause: () => {
      audio.pause();
    },
    stop: () => {
      audio.pause();
      audio.currentTime = 0;
    },
    prevTrack: () => {
      const { currentTrack, currentPlaylist, setCurrentTrack } = get();
      const queue = currentTrack?.queue;
      if (
        audio.currentTime > 5 ||
        !currentPlaylist ||
        typeof queue !== "number" ||
        queue === 0
      ) {
        audio.currentTime = 0;
        return;
      }

      const newQueue = queue - 1;
      const prevTrack = currentPlaylist.items[newQueue];
      if (prevTrack) {
        setCurrentTrack({ ...prevTrack, queue: newQueue });
      } else {
        audio.currentTime = 0;
      }
    },
    nextTrack: () => {
      const {
        currentTrack,
        currentPlaylist,
        setCurrentTrack,
        repeatType,
        stop,
      } = get();
      const queue = currentTrack?.queue;
      if (!currentPlaylist || typeof queue !== "number") {
        return;
      }
      const newQueue = queue + 1;
      const nextTrack = currentPlaylist.items[newQueue];
      if (nextTrack) {
        setCurrentTrack({ ...nextTrack, queue: newQueue });
      } else {
        repeatType === "all"
          ? setCurrentTrack({ ...currentPlaylist.items[0], queue: 0 })
          : stop();
      }
    },
    setRepeatType: (repeatType) => {
      set({ repeatType });
    },
    toggleRepeatType: () => {
      const prevRepeatType = get().repeatType;
      const prevRepeatTypeIndex = repeatTypesList.indexOf(prevRepeatType);
      const newRepeatType =
        repeatTypesList[
          prevRepeatTypeIndex < 0 ? 0 : prevRepeatTypeIndex + 1
        ] || repeatTypesList[0];
      set({ repeatType: newRepeatType });
    },
  };
});
