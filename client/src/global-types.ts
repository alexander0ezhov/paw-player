import { ReactNode } from "react";
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
