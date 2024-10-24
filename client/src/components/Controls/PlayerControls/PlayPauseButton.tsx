import React from "react";
import { Play, Pause } from "@assets/icons";
import { IPlayPauseButtonProps } from "@components/Controls/types";

const isPlaying = false;
const size = "2rem";

const PlayPauseButton: React.FC<IPlayPauseButtonProps> = ({
  onPlay,
  onPause,
  ...props
}) => {
  return (
    <>
      {isPlaying ? (
        <Pause width={size} height={size} onClick={onPlay} {...props} />
      ) : (
        <Play width={size} height={size} onClick={onPause} {...props} />
      )}
    </>
  );
};

export default PlayPauseButton;
