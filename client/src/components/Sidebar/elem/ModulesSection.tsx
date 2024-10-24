import React from "react";
import SettingsButton from "@components/Sidebar/elem/SettingsButton";
import ModuleItem from "@components/Sidebar/elem/ModuleItem";
import { IComponentProps, Routes } from "@root/global-types";
import { Files, Home, Playlist } from "@assets/icons";
import s from "../index.module.scss";

const ModulesSection: React.FC<IComponentProps> = () => {
  return (
    <ul className={s.modulesSection}>
      <ModuleItem icon={<Home />} name={Routes.Home} />
      <ModuleItem icon={<Files />} name={Routes.Files} />
      <ModuleItem icon={<Playlist />} name={Routes.Playlists} />
      <SettingsButton />
    </ul>
  );
};

export default ModulesSection;
