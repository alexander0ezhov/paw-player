import React from "react";
import cn from "classnames";
import ModuleItem from "@components/Sidebar/elem/ModuleItem";
import { IComponentProps, Routes } from "@root/global-types";
import { useRoutingStore } from "@store/routing";
import { Files, Home, Playlist, Settings } from "@assets/icons";
import s from "../index.module.scss";

const items = [
  {
    icon: <Home />,
    name: Routes.Home,
    route: Routes.Home,
  },
  {
    icon: <Files />,
    name: Routes.Files,
    route: Routes.Files,
  },
  {
    icon: <Playlist />,
    name: Routes.Playlists,
    route: Routes.Playlists,
  },
  {
    icon: <Settings />,
    name: Routes.Settings,
    route: Routes.Settings,
    isInBottom: true,
  },
];

const ModulesSection: React.FC<IComponentProps> = () => {
  const { route, redirect } = useRoutingStore();
  return (
    <ul className={s.modulesSection}>
      {items.map((item) => (
        <ModuleItem
          key={item.name}
          className={cn(
            item.isInBottom && s.bottomItem,
            route === item.route && s.active,
          )}
          icon={item.icon}
          name={item.name}
          onClick={() => {
            redirect(item.route);
          }}
        />
      ))}
    </ul>
  );
};

export default ModulesSection;
