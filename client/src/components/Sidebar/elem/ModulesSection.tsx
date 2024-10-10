import React from "react";
import SettingsButton from "@components/Sidebar/elem/SettingsButton";
import ModuleItem from "@components/Sidebar/elem/ModuleItem";
import { IComponentProps } from "@root/global-types";
import { Files } from "@assets/icons";
import s from "../index.module.scss";

const ModulesSection: React.FC<IComponentProps> = () => {
  return (
    <ul className={s.modulesSection}>
      <ModuleItem icon={<Files height="1.5rem" width="1.5rem" />} name="Home" />
      <ModuleItem icon={"F"} name="Files" />
      <ModuleItem icon={"P"} name="Playlists" />
      <SettingsButton />
    </ul>
  );
};

export default ModulesSection;
