import { create } from "zustand";
import { PlayerType, PlaylistType, TrackType } from "@root/global-types";

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
  nextTrack: () => void;
};

export const usePlayerStore = create<State & Actions>((set, get) => {
  const audio = new Audio();
  audio.onplay = () => set({ isPlaying: true });
  audio.onpause = () => set({ isPlaying: false });
  return {
    audio,
    isPlaying: false,
    currentTrack: undefined,
    currentPlaylist: undefined,
    setCurrentTrack: async (track) => {
      if (!track.src) {
        track.src = await window.node.readFileStream(track.path);
        // error handling
      }
      audio.src = track.src || "";
      set({ currentTrack: track });
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
        track.queue =
          playlist?.items.findIndex((item) => item.name === track.name) || 0;
      }
      setCurrentTrack(track);
    },
    play: () => {
      if (!get().currentTrack) return;
      audio.play();
    },
    pause: () => {
      audio.pause();
    },
    nextTrack: () => {
      const { currentTrack, currentPlaylist, setCurrentTrack } = get();
      console.log(currentTrack);
      if (!currentPlaylist || !currentTrack?.queue) {
        return;
      }
      const newQueue = currentTrack.queue + 1;
      const nextTrack = currentPlaylist.items[newQueue];
      if (nextTrack) {
        nextTrack.queue = newQueue;
        setCurrentTrack(nextTrack);
      }
    },
  };
});
