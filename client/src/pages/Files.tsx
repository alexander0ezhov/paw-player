import React from "react";
import { IComponentProps } from "@root/global-types";
import Table from "@components/common/Table";
import globalcss from "@root/global.module.scss";

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
    <>
      <button onClick={getMusicFiles}>Найти музыку</button>
      <button onClick={getMusicDirectory}>Открыть папку</button>

      <Table
        className={globalcss.mt1}
        columns={[{ name: "name" }, { name: "path" }]}
        items={[
          { key: "qwe", name: "qwe", path: "path1" },
          { key: "123", name: "123", path: "432" },
        ]}
      />
    </>
  );
};

export default Files;
