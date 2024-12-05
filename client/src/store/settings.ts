import { create } from "zustand";
import defaultSettings from "@root/default-settings.json";
import { ThemeModes, SettingsType } from "@root/global-types";
import { createDebounce, setThemeModeToDOM } from "@utils/func";

const debounce = createDebounce();
const STORE_NAME = "settingsStore";

type State = SettingsType;
type Actions = {
  setThemeMode: (themeMode: SettingsType["themeMode"]) => void;
  toggleThemeMode: () => void;
};

const getStoreData = async () => await window.node.loadUserData(STORE_NAME);

const handleAfterStoreChange = (store: State & Actions) => {
  setThemeModeToDOM(store.themeMode);
};

const settings = defaultSettings as State;
setThemeModeToDOM(settings.themeMode);

const saveStoreData = async (storeData: State & Actions) => {
  const { themeMode } = storeData;
  const dataToSave = { themeMode };
  return await window.node.saveUserData(STORE_NAME, dataToSave);
};

export const useSettingsStore = create<State & Actions>((set, get) => {
  getStoreData().then((result) => {
    set({ themeMode: result.themeMode });
    handleAfterStoreChange(get());
  });
  return {
    ...settings,
    setThemeMode: (themeMode) => {
      set({ themeMode });
      handleAfterStoreChange(get());
      debounce(saveStoreData.bind(null, get()), 5000);
    },
    toggleThemeMode: () => {
      const { themeMode, setThemeMode } = get();
      const newThemeMode =
        themeMode === ThemeModes.light ? ThemeModes.dark : ThemeModes.light;
      setThemeMode(newThemeMode);
    },
  };
});
