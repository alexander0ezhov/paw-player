import React from "react";

import globalcss from "@root/global.module.scss";
import cn from "classnames";
import { NextTrack, PrevTrack, Shuffle } from "@assets/icons";

import s from "../index.module.scss";

import PlayPauseButton from "./PlayPauseButton";
import RepeatButton from "./RepeatButton";
import { IPlayerControlsProps } from "../types";

const smallControlsSize = "1.3rem";
const smallControlsProps = {
  width: smallControlsSize,
  height: smallControlsSize,
};

const PlayerControls: React.FC<IPlayerControlsProps> = ({
  className,
  isPlaying,
  play,
  pause,
  nextTrack,
  prevTrack,
  repeatType,
  toggleRepeatType,
}) => {
  return (
    <div className={cn(className, s.playerControls)}>
      <Shuffle {...smallControlsProps} />
      <PrevTrack {...smallControlsProps} onClick={prevTrack} />
      <PlayPauseButton
        className={globalcss.accentIcon}
        isPlaying={isPlaying}
        onPlay={play}
        onPause={pause}
      />
      <NextTrack {...smallControlsProps} onClick={nextTrack} />
      <RepeatButton
        {...smallControlsProps}
        repeatType={repeatType}
        onClick={toggleRepeatType}
      />
    </div>
  );
};

export default PlayerControls;
