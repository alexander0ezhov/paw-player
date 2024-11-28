import { ReactNode } from "react";
import Playlists from "@pages/Playlists";
export interface IComponentProps {
  className?: string;
  style?: object;
  children?: ReactNode;
}

export enum ThemeModes {
  dark = "dark",
  light = "light",
}

export type SettingsType = {
  themeMode: keyof typeof ThemeModes;
};

export enum Routes {
  Root = "Root",
  Home = "Home",
  Files = "Files",
  Playlists = "Playlists",
  Settings = "Settings",
}

export type RoutingType = {
  route: keyof typeof Routes;
};

export type PlayerType = {
  audio: HTMLAudioElement;
  currentTrack?: TrackType;
  isPlaying: boolean;
  currentPlaylist?: PlaylistType;
};

export type FileType = {
  name: string;
  path: string;
  duration?: number;
  clientDuration?: string;
};

export type TrackType = FileType & {
  src?: string;
  queue?: number
};

export type PlaylistType = {
  name: string;
  items: TrackType[];
}