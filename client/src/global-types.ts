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

export enum RepeatTypes {
  all = "all",
  one = "one",
  none = "none",
}

export type RepeatType = keyof typeof RepeatTypes;

export type PlayerType = {
  audio: HTMLAudioElement;
  currentTrack?: TrackType;
  isPlaying: boolean;
  repeatType: RepeatType;
  currentPlaylist?: PlaylistType;
};

export type FileType = {
  name: string;
  path: string;
  duration?: number;
  clientDuration?: string;
  title?: string;
  artists?: string[];
  artist?: string;
  album?: string;
  genre?: string;
  year?: string;
  picture?: any;
  pictureLink?: string;
};

export type TrackType = FileType & {
  src?: string;
  queue?: number;
};

export type PlaylistType = {
  name: string;
  items: TrackType[];
};
