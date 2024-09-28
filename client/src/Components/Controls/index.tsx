import React from "react";
import cn from "classnames";
import globalcss from "@root/global.module.scss";
import { IComponentProps } from "@root/global-types";
import s from "./index.module.scss";

const Content: React.FC<IComponentProps> = ({ className }) => {
  return (
    <main className={cn(s.root, globalcss.container, className)}>Controls</main>
  );
};

export default Content;
