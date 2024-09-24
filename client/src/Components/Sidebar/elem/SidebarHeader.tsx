import React from "react";
import cn from "classnames";
import globalcss from "@root/global.module.scss";
import { SidebarMenu } from "@assets/icons";
import { ISidebarHeaderProps } from "../types";
import s from "../index.module.scss";

const SidebarHeader: React.FC<ISidebarHeaderProps> = ({ toggleSize }) => {
  return (
    <div>
      <SidebarMenu
        className={cn(globalcss.clickable, s.sidebarButton)}
        height="1rem"
        width="1rem"
        onClick={toggleSize}
      />
    </div>
  );
};

export default SidebarHeader;
