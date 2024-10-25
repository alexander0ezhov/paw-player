import React from "react";
import { Play, Pause } from "@assets/icons";
import { IPlayPauseButtonProps } from "@components/Controls/types";

const size = "2rem";

const PlayPauseButton: React.FC<IPlayPauseButtonProps> = ({
  onPlay,
  onPause,
  isPlaying,
  ...props
}) => {
  return (
    <>
      {isPlaying ? (
        <Pause width={size} height={size} onClick={onPause} {...props} />
      ) : (
        <Play width={size} height={size} onClick={onPlay} {...props} />
      )}
    </>
  );
};

export default PlayPauseButton;
