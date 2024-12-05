import { create } from "zustand";
import defaultSettings from "@root/default-settings.json";
import { ThemeModes, SettingsType } from "@root/global-types";
import { createDebounce, setThemeModeToDOM } from "@utils/func";

type State = SettingsType;
type Actions = {
  setThemeMode: (themeMode: SettingsType["themeMode"]) => void;
  toggleThemeMode: () => void;
};

const debounce = createDebounce();
const STORE_NAME = "settingsStore";
const settings = defaultSettings as State;

const getStoreData = window.node.loadUserData.bind(null, STORE_NAME);
const saveStoreData = async (storeData: State & Actions) => {
  const { themeMode } = storeData;
  const dataToSave = { themeMode };
  return await window.node.saveUserData(STORE_NAME, dataToSave);
};

export const useSettingsStore = create<State & Actions>((set, get) => {
  getStoreData().then(set);
  return {
    ...settings,
    setThemeMode: (themeMode) => {
      set({ themeMode });
    },
    toggleThemeMode: () => {
      const { themeMode, setThemeMode } = get();
      const newThemeMode =
        themeMode === ThemeModes.light ? ThemeModes.dark : ThemeModes.light;
      setThemeMode(newThemeMode);
    },
  };
});

useSettingsStore.subscribe((store, prevStore) => {
  setThemeModeToDOM(store.themeMode);
  debounce(saveStoreData.bind(null, store), 5000);
});
