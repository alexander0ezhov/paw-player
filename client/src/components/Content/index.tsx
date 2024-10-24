import React from "react";
import cn from "classnames";
import { IComponentProps } from "@root/global-types";
import { useRoutingStore } from "@store/routing";
import s from "./index.module.scss";

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
