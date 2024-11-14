import React from "react";
import { IComponentProps, TrackType } from "@root/global-types";
import Table from "@components/common/Table";
import globalcss from "@root/global.module.scss";
import { useFilesStore } from "@store/files";
import { usePlayerStore } from "@store/player";
import PageWrapper from "@components/common/PageWrapper";
import PlayItem from "@components/common/PlayItem";
import Header from "@components/common/Header";
import FilesSection from "@components/sections/Files";
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
    { key: "name", name: "name", width: "20%" },
    { key: "path", name: "path", width: "60%" },
    { key: "clientDuration", name: "clientDuration", width: "20%" },
  ];

  return (
    <PageWrapper className={globalcss.page} hasLayout>
      <Header>Files</Header>
      <FilesSection getFiles={getFiles} getDirectory={getDirectory} />
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
