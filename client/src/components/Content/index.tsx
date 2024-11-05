import React from "react";
import Route from "@components/Content/Route";
import { IComponentProps } from "@root/global-types";
import { useRoutingStore } from "@store/routing";

const Content: React.FC<IComponentProps> = () => {
  const route = useRoutingStore((store) => store.route);
  return <Route key={route} route={route} />;
};

export default Content;
