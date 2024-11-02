import React from "react";
import { IComponentProps } from "@root/global-types";
import Table from "@components/common/Table";

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

      <Table
        columns={[{ name: "name" }, { name: "path" }]}
        items={[
          { name: "qwe", path: "path1" },
          { name: "123", path: "432" },
        ]}
      />
    </div>
  );
};

export default Files;
