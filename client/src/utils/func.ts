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
  let interval: ReturnType<typeof setInterval> | null = null;
  return {
    action: (action: () => void, delay: number = 1000) => {
      if (interval) clearInterval(interval);
      interval = setInterval(action, delay);
    },
    clear: () => interval && clearInterval(interval),
  };
};

export const createDebounce = () => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return (action: () => any, delay: number = 1000) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(action, delay);
  };
};

export const secondsToTime = (duration: number) =>
  `${Math.trunc(duration / 60)}:${Math.round(duration % 60)
    .toString()
    .padStart(2, "0")}`;

const defaultArtwork = [
  { src: Artwork128.default, sizes: "128x128", type: "image/png" },
  { src: Artwork256.default, sizes: "256x256", type: "image/png" },
  { src: Artwork512.default, sizes: "512x512", type: "image/png" },
];

export const setMediaMetadata = (track: TrackType) => {
  const mainPicture = track.picture?.[0];
  navigator.mediaSession.metadata = new MediaMetadata({
    title: track.title || track.name,
    artist: track.artist,
    album: track.album,
    artwork: mainPicture
      ? [
          {
            src: mainPicture.data,
            sizes: "128x128", // TODO: sizes
            type: mainPicture.format,
          },
        ]
      : defaultArtwork,
  });
};
