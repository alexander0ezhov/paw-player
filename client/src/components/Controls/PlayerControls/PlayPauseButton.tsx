import React from "react";
import { IComponentProps } from "@root/global-types";
import { Play, Pause } from "@assets/icons";

const isPlaying = false;
const size = "2rem";

const PlayPauseButton: React.FC<IComponentProps> = ({ className }) => {
  return (
    <span className={className} onClick={() => {}}>
      {isPlaying ? (
        <Pause width={size} height={size} />
      ) : (
        <Play width={size} height={size} />
      )}
    </span>
  );
};

export default PlayPauseButton;
