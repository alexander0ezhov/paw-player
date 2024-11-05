import React from "react";
import { IPlayItemProps } from "./types";

import { Audio, PlayOutline, PauseOutline } from "@assets/icons";
import s from "./index.module.scss";

const PlayItem: React.FC<IPlayItemProps> = ({
  image,
  isCurrentTrack,
  isPlaying,
  onPlayPauseButtonClick,
  hovered,
}) => {
  return (
    <div
      className={s.root}
      style={image ? { backgroundImage: image } : undefined}
      onClick={onPlayPauseButtonClick}
    >
      {isCurrentTrack || hovered ? (
        isPlaying ? (
          <PauseOutline className={s.control} />
        ) : (
          <PlayOutline className={s.control} />
        )
      ) : (
        <Audio />
      )}
    </div>
  );
};

export default PlayItem;
