import React from "react";
import { IComponentProps, TrackType } from "@root/global-types";
import Table from "@components/common/Table";
import globalcss from "@root/global.module.scss";
import { useFilesStore } from "@store/files";
import { usePlayerStore } from "@store/player";
import PageWrapper from "@components/common/PageWrapper";
import PlayItem from "@components/common/PlayItem";
import { TableItemType } from "@components/common/Table/types";

const Files: React.FC<IComponentProps> = () => {
  const { filesList, getFiles, getDirectory } = useFilesStore();
  const { setCurrentTrack, currentTrack, isPlaying, pause, play } =
    usePlayerStore();

  const columns = [
    {
      key: "play",
      name: "",
      width: "2rem",
      //TODO: memoize
      customRender: (item: TableItemType, hovered: boolean) => {
        const isCurrentTrack = currentTrack?.path === item.path;
        const isItemPlaying = isCurrentTrack && isPlaying;
        const onPlayPauseButtonClick = () => {
          if (isCurrentTrack) {
            return isPlaying ? pause() : play();
          }
          return setCurrentTrack(item as TrackType);
        };
        return (
          <PlayItem
            image={""}
            hovered={hovered}
            isCurrentTrack={isCurrentTrack}
            isPlaying={isItemPlaying}
            onPlayPauseButtonClick={onPlayPauseButtonClick}
          />
        );
      },
    },
    { key: "name", name: "name", width: "30%" },
    { key: "path", name: "path", width: "70%" },
  ];

  return (
    <PageWrapper hasLayout>
      <button onClick={getFiles}>Найти музыку</button>
      <button onClick={getDirectory}>Открыть папку</button>
      <Table
        className={globalcss.mt1}
        columns={columns}
        onItemDbClick={(item) => setCurrentTrack(item as TrackType)}
        keyColumn={"path"}
        items={filesList}
        // items={[
        //   { name: "123", path: "231112" },
        //   { name: "243243243", path: "231§sdsdascads112" },
        // ]}
      />
    </PageWrapper>
  );
};

export default Files;
