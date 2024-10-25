import React from "react";
import cn from "classnames";
import { IComponentProps } from "@root/global-types";
import { useRoutingStore } from "@store/routing";
import s from "./index.module.scss";

const Content: React.FC<IComponentProps> = ({ className }) => {
  const { route } = useRoutingStore();
  const getMusicFiles = async () => {
    const musicList = await window.node.getMusicFiles();
    console.log(musicList);
  };
  const getMusicDirectory = async () => {
    const musicList = await window.node.getMusicDirectory();
    console.log(musicList);
  };
  return (
    <main className={cn(s.root, className)}>
      {route}
      <button onClick={getMusicFiles}>Найти музыку</button>
      <button onClick={getMusicDirectory}>открыть папку</button>
    </main>
  );
};

export default Content;
