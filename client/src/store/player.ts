import { create } from "zustand";
import { PlayerType, TrackType } from "@root/global-types";

type State = PlayerType;
type Actions = {
  setCurrentTrack: (track: TrackType) => void;
  play: () => void;
  pause: () => void;
};

export const usePlayerStore = create<State & Actions>((set, get) => {
  const audio = new Audio();
  audio.onplay = () => set({ isPlaying: true });
  audio.onpause = () => set({ isPlaying: false });
  return {
    // audio,
    isPlaying: false,
    currentTrack: undefined,
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
    play: () => {
      if (!get().currentTrack) return;
      audio.play();
    },
    pause: () => {
      audio.pause();
    },
  };
});
