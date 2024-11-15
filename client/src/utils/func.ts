import { SettingsType } from "@root/global-types";

export const setThemeModeToDOM = (mode: SettingsType["themeMode"]) => {
  document.body.dataset.theme = mode;
};

export const checkThemeModeFromDOM = () =>
  document.body.dataset.theme as SettingsType["themeMode"];

export const createInterval = () => {
  let interval: ReturnType<typeof setInterval> | null;
  return {
    action: (action: () => void, delay: number = 1000) => {
      if (interval) clearInterval(interval);
      interval = setInterval(action, delay);
    },
    clear: () => interval && clearInterval(interval),
  };
};

export const secondsToTime = (duration: number) =>
  `${Math.trunc(duration / 60)}:${Math.round(duration % 60)
    .toString()
    .padStart(2, "0")}`;
