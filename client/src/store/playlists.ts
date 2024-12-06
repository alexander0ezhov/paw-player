import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { TrackType, PlaylistType } from "@root/global-types";
import { createDebounce } from "@utils/func";

type State = {
  playlists: Record<string, PlaylistType>;
};
type Actions = {
  createPlaylist: (playlist: PlaylistType) => void;
  addItemsToPlaylist: (items: TrackType[], name: string) => void;
};

const debounce = createDebounce();
const STORE_NAME = "playlistsStore";

const getStoreData: () => Promise<Partial<State>> =
  window.node.loadUserData.bind(null, STORE_NAME);
const saveStoreData = async (storeData: State & Actions) => {
  const { playlists } = storeData;
  // const listOfPlaylists = Object.entries(playlists).map([key, value]=>[key, value])
  // each playlist is on separate file /// like `${STORE_NAME}_{playlist.name}`
  // const dataToSave = { playlists };
  // return await window.node.saveUserData(STORE_NAME, dataToSave);
};

export const usePlaylistsStore = create(
  immer<State & Actions>((set, get) => ({
    playlists: {},
    createPlaylist: (playlist) => {
      const { playlists } = get();
      if (playlists[playlist.name])
        return alert("Playlist name already exists");
      set((state) => {
        state.playlists[playlist.name] = playlist;
      });
    },
    addItemsToPlaylist: (items, playlistName) => {},
  })),
);

usePlaylistsStore.subscribe((store) => {
  debounce(saveStoreData.bind(null, store), 5000);
});
