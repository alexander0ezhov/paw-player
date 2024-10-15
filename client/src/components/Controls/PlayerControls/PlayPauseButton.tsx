import React from "react";
import { IComponentProps } from "@root/global-types";
import { Play, Pause } from "@assets/icons";

const isPlaying = false;
const size = "2rem";

const PlayPauseButton: React.FC<IComponentProps> = (props) => {
  return (
    <>
      {isPlaying ? (
        <Pause width={size} height={size} {...props} />
      ) : (
        <Play width={size} height={size} {...props} />
      )}
    </>
  );
};

export default PlayPauseButton;
