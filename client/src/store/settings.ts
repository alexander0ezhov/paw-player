import { create } from "zustand";
import defaultSettings from "@root/default-settings.json";
import { ThemeModes, SettingsType } from "@root/global-types";
import { setThemeModeToDOM } from "@utils/func";
import {
  getLocalStorageSettings,
  setLocalStorageSettings,
} from "@utils/localStorage";

const getSettings = () => {
  const localStorageSettings = getLocalStorageSettings();
  if (!localStorageSettings) {
    setLocalStorageSettings(defaultSettings as SettingsType);
    return defaultSettings as SettingsType;
  }
  return localStorageSettings;
};

const settings = getSettings();
setThemeModeToDOM(settings.themeMode);

type State = SettingsType;
type Actions = {
  setThemeMode: (themeMode: SettingsType["themeMode"]) => void;
  toggleThemeMode: () => void;
};

export const useSettingsStore = create<State & Actions>((set) => ({
  ...settings,
  setThemeMode: (themeMode) => set({ themeMode }),
  toggleThemeMode: () =>
    set((state) => {
      const newThemeMode =
        state.themeMode === ThemeModes.light
          ? ThemeModes.dark
          : ThemeModes.light;
      setThemeModeToDOM(newThemeMode);
      return { themeMode: newThemeMode };
    }),
}));
