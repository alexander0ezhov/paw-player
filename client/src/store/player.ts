import { create } from "zustand";
import { PlayerType, TrackType } from "@root/global-types";

type State = PlayerType;
type Actions = {
  setCurrentTrack: (track: TrackType) => void;
  play: () => void;
  pause: () => void;
};

const audio = new Audio();

export const usePlayerStore = create<State & Actions>((set) => ({
  // audio,
  isPlaying: false,
  currentTrack: undefined,
  setCurrentTrack: (track) => {
    audio.src = track.src;
    set({ currentTrack: track });
    // TODO: should save track to config in node
  },
  play: () => {
    audio.play().then(() => set({ isPlaying: true }));
  },
  pause: () => {
    audio.pause();
    set({ isPlaying: false });
  },
}));
