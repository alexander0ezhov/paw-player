import { create } from "zustand";
import defaultSettings from "@root/default-settings.json";
import { ThemeModes, SettingsType } from "@root/global-types";
import { setThemeModeToDOM } from "@utils/func";
import { getSettings } from "@utils/localStorage";

const initialSettings = (getSettings() || defaultSettings) as SettingsType;

type State = SettingsType;

type Actions = {
  setThemeMode: (themeMode: SettingsType["themeMode"]) => void;
  toggleThemeMode: () => void;
};

export const useSettingsStore = create<State & Actions>((set) => ({
  ...initialSettings,
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
