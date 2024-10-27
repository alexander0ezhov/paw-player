import React from "react";
import { IComponentProps } from "@root/global-types";

const Files: React.FC<IComponentProps> = () => {
  const getMusicFiles = async () => {
    const musicList = await window.node.getMusicFiles();
    console.log(musicList);
  };
  const getMusicDirectory = async () => {
    const musicList = await window.node.getMusicDirectory();
    console.log(musicList);
  };
  return (
    <div>
      <button onClick={getMusicFiles}>Найти музыку</button>
      <button onClick={getMusicDirectory}>Открыть папку</button>
    </div>
  );
};

export default Files;
