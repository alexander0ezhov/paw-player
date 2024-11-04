import React from "react";
import { IComponentProps } from "@root/global-types";
import Table from "@components/common/Table";
import globalcss from "@root/global.module.scss";
import { useFilesStore } from "@store/files";

const Files: React.FC<IComponentProps> = () => {
  const { filesList, getFiles, getDirectory } = useFilesStore();
  return (
    <>
      <button onClick={getFiles}>Найти музыку</button>
      <button onClick={getDirectory}>Открыть папку</button>
      <Table
        className={globalcss.mt1}
        columns={[
          { key: "name", name: "name", width: "30%" },
          { key: "path", name: "path", width: "40%" },
        ]}
        // keyField={"name"}
        items={filesList}
      />
    </>
  );
};

export default Files;
