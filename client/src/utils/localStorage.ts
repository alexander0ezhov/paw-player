import { SettingsType } from "@root/global-types";
const settingsKey = "settings";

export const getSettings = () => {
  const settings = localStorage.getItem(settingsKey);
  if (!settings) return null;
  return JSON.parse(settings) as SettingsType;
};

export const setSettings = (newSettings: SettingsType): void => {
  localStorage.setItem(settingsKey, JSON.stringify(newSettings));
};

// localStorage.removeItem("settings");
