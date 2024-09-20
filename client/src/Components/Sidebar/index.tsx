import React from "react";
import { IComponentProps } from "@root/global-types";
import cn from "classnames";
import s from "./index.module.scss";

const Sidebar: React.FC<IComponentProps> = ({ className }) => {
  return <aside className={cn(s.root, className)}>Sidebar</aside>;
};

export default Sidebar;
