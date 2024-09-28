import React from "react";
import cn from "classnames";
import globalcss from "@root/global.module.scss";
import { SidebarMenu } from "@assets/icons";
import ThemeToggler from "@Components/ThemeToggler";
import { ISidebarHeaderProps } from "../types";
import s from "../index.module.scss";

const SidebarHeader: React.FC<ISidebarHeaderProps> = ({ toggleSize }) => {
  return (
    <div className={s.sidebarHeader}>
      <SidebarMenu
        className={cn(globalcss.clickable, s.sidebarButton)}
        height="1rem"
        width="1rem"
        onClick={toggleSize}
      />
      <ThemeToggler className={s.themeToggler} />
    </div>
  );
};

export default SidebarHeader;
