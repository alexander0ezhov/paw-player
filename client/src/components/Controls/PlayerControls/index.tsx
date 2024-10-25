import React, { useState } from "react";

import { IComponentProps } from "@root/global-types";

import globalcss from "@root/global.module.scss";
import cn from "classnames";
import { usePlayerStore } from "@store/player";
import { NextTrack, PrevTrack, Shuffle } from "@assets/icons";

import s from "../index.module.scss";

import PlayPauseButton from "./PlayPauseButton";
import RepeatButton from "./RepeatButton";

const smallControlsSize = "1.3rem";
const smallControlsProps = {
  width: smallControlsSize,
  height: smallControlsSize,
};

const PlayerControls: React.FC<IComponentProps> = ({ className }) => {
  const { isPlaying, play, pause } = usePlayerStore();

  return (
    <div className={cn(className, s.playerControls)}>
      <RepeatButton {...smallControlsProps} />
      <PrevTrack {...smallControlsProps} />
      <PlayPauseButton
        className={globalcss.accentIcon}
        isPlaying={isPlaying}
        onPlay={play}
        onPause={pause}
      />
      <NextTrack {...smallControlsProps} />
      <Shuffle {...smallControlsProps} />
    </div>
  );
};

export default PlayerControls;
