import React from "react";
import { IModuleItemProps } from "@components/Sidebar/types";
import s from "../index.module.scss";

const ModuleItem: React.FC<IModuleItemProps> = ({ className, name, icon }) => {
  return (
    <li className={className}>
      <span>{icon}</span>
      <span className={s.moduleName}>{name}</span>
    </li>
  );
};

export default ModuleItem;
