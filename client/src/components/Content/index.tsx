import React from "react";
import cn from "classnames";
import { IComponentProps } from "@root/global-types";
import { useRoutingStore } from "@store/routing";

import Pages from "@root/pages";

import s from "./index.module.scss";

const Content: React.FC<IComponentProps> = ({ className }) => {
  const { route } = useRoutingStore();

  return <div className={cn(s.root, className)}>{Pages[route]({})}</div>;
};

export default Content;
