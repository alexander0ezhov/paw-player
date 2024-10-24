import React from "react";
import { IComponentProps } from "@root/global-types";
import cn from "classnames";
import s from "./index.module.scss";
import { useRoutingStore } from "@store/routing";

const Content: React.FC<IComponentProps> = ({ className }) => {
  const { route } = useRoutingStore();
  return (
    <main className={cn(s.root, className)}>
      {route}
      <button onClick={window.node.openFileDialog}>Найти музыку</button>
    </main>
  );
};

export default Content;
