import { create } from "zustand";
import { FileType } from "@root/global-types";

type State = {
  filesList: FileType[];
};
type Actions = {
  getFiles: () => void;
  getDirectory: () => void;
};

export const useFilesStore = create<State & Actions>((set) => ({
  filesList: [],
  getFiles: async () => {
    const files = await window.node.getMusicFiles();
    console.log("files", files);
    set((state) => ({
      filesList: state.filesList.concat(files),
    }));
  },
  getDirectory: async () => {
    const files = await window.node.getMusicDirectory();
    console.log(files);
    set((state) => ({
      filesList: state.filesList.concat(files),
    }));
  },
}));
