import { create } from "zustand";
import { PlayerType, TrackType } from "@root/global-types";

type State = PlayerType;
type Actions = {
  setCurrentTrack: (track: TrackType) => void;
  play: () => void;
  pause: () => void;
};

const audio = new Audio();

export const usePlayerStore = create<State & Actions>((set, get) => ({
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
    audio.play().then(() => set({ isPlaying: true }));
  },
  pause: () => {
    audio.pause();
    set({ isPlaying: false });
  },
}));
