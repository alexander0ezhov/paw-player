import React from "react";
import { IComponentProps } from "@root/global-types";
import ModuleItem from "@components/Sidebar/elem/ModuleItem";
import s from "../index.module.scss";

const SettingsButton: React.FC<IComponentProps> = () => {
  return (
    <ModuleItem
      className={s.settingsButton}
      icon="S"
      name="Settings"
    ></ModuleItem>
  );
};

export default SettingsButton;
