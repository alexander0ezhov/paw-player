import React from "react";
import { IComponentProps, TrackType } from "@root/global-types";
import Table from "@components/common/Table";
import globalcss from "@root/global.module.scss";
import { useFilesStore } from "@store/files";
import { usePlayerStore } from "@store/player";
import PageWrapper from "@components/common/PageWrapper";

const Files: React.FC<IComponentProps> = () => {
  const { filesList, getFiles, getDirectory } = useFilesStore();
  const { setCurrentTrack } = usePlayerStore();
  return (
    <PageWrapper hasLayout>
      <button onClick={getFiles}>Найти музыку</button>
      <button onClick={getDirectory}>Открыть папку</button>
      <Table
        className={globalcss.mt1}
        columns={[
          { key: "name", name: "name", width: "30%" },
          { key: "path", name: "path", width: "70%" },
        ]}
        onItemClick={(item) => setCurrentTrack(item as TrackType)}
        // keyField={"name"}
        // items={filesList}
        items={[
          { name: "123", path: "231112" },
          { name: "243243243", path: "231§sdsdascads112" },
        ]}
      />
    </PageWrapper>
  );
};

export default Files;
