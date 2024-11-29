import { SettingsType, TrackType } from "@root/global-types";
import * as Artwork128 from "@assets/artwork/artwork-128.png";
import * as Artwork256 from "@assets/artwork/artwork-256.png";
import * as Artwork512 from "@assets/artwork/artwork-512.png";

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

export const setMediaMetadata = (track: TrackType) => {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: track.name,
    artist: track.name,
    album: track.name,
    artwork: [
      { src: Artwork128.default, sizes: "128x128", type: "image/png" },
      { src: Artwork256.default, sizes: "256x256", type: "image/png" },
      { src: Artwork512.default, sizes: "512x512", type: "image/png" },
    ],
  });
};
