import React from "react";
import SettingsButton from "@components/Sidebar/elem/SettingsButton";
import ModuleItem from "@components/Sidebar/elem/ModuleItem";
import { IComponentProps } from "@root/global-types";
import { Files, Home, Playlist } from "@assets/icons";
import s from "../index.module.scss";

const ModulesSection: React.FC<IComponentProps> = () => {
  return (
    <ul className={s.modulesSection}>
      <ModuleItem icon={<Home />} name="Home" />
      <ModuleItem icon={<Files />} name="Files" />
      <ModuleItem icon={<Playlist />} name="Playlists" />
      <SettingsButton />
    </ul>
  );
};

export default ModulesSection;
