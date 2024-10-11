import { SettingsType } from "@root/global-types";

export const setThemeModeToDOM = (mode: SettingsType["themeMode"]) => {
  document.body.dataset.theme = mode;
};

export const checkThemeModeFromDOM = () =>
  document.body.dataset.theme as SettingsType["themeMode"];
