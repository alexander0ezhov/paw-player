import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import {
  PlayerType,
  PlaylistType,
  TrackType,
  RepeatType,
  RepeatTypes,
} from "@root/global-types";
import { createDebounce, setMediaMetadata } from "@utils/func";

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
const debounce = createDebounce();
const STORE_NAME = "playerStore";
const repeatTypesList = Object.keys(RepeatTypes) as RepeatType[];

const getStoreData: () => Promise<Partial<State>> =
  window.node.loadUserData.bind(null, STORE_NAME);
const saveStoreData = async (storeData: Partial<State>) => {
  const { repeatType, currentTrack, currentPlaylist } = storeData;
  const dataToSave = {
    repeatType,
    currentTrackPath: currentTrack?.path,
    currentPlaylistName: currentPlaylist?.name,
  };
  return await window.node.saveUserData(STORE_NAME, dataToSave);
};

export const usePlayerStore = create(
  subscribeWithSelector<State & Actions>((set, get) => {
    getStoreData().then((result) => {
      // console.log(result);
      // transform data
      set({ repeatType: result.repeatType });
    });

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
        setMediaMetadata(track);
        get().play();
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
          repeatType === "none"
            ? stop()
            : setCurrentTrack({ ...currentPlaylist.items[0], queue: 0 });
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
        get().setRepeatType(newRepeatType);
      },
    };
  }),
);

usePlayerStore.subscribe(
  ({ currentTrack, repeatType, currentPlaylist }) => ({
    currentTrack,
    repeatType,
    currentPlaylist,
  }),
  (partialStore: Partial<State>) =>
    debounce(saveStoreData.bind(null, partialStore), 5000),
);
