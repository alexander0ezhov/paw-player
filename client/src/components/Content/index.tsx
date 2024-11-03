import React from "react";
import { useShallow } from "zustand/react/shallow";
import cn from "classnames";
import Route from "@components/Content/Route";
import { IComponentProps } from "@root/global-types";
import { useRoutingStore } from "@store/routing";
import s from "./index.module.scss";

const Content: React.FC<IComponentProps> = ({ className }) => {
  const route = useRoutingStore(useShallow((store) => store.route));
  return (
    <div className={cn(s.root, className)}>
      <Route key={route} route={route} />
    </div>
  );
};

export default Content;
