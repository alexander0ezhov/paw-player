import React from "react";
import { IComponentProps } from "@root/global-types";
import cn from "classnames";
import PlayPauseButton from "./PlayPauseButton";
import RepeatButton from "./RepeatButton";
import { NextTrack, PrevTrack, Shuffle } from "@assets/icons";
import s from "../index.module.scss";

const smallControlsSize = "1.3rem";
const smallControlsProps = {
  width: smallControlsSize,
  height: smallControlsSize,
};

const PlayerControls: React.FC<IComponentProps> = ({ className }) => {
  return (
    <div className={cn(className, s.playerControls)}>
      <RepeatButton {...smallControlsProps} />
      <PrevTrack {...smallControlsProps} />
      <PlayPauseButton />
      <NextTrack {...smallControlsProps} />
      <Shuffle {...smallControlsProps} />
    </div>
  );
};

export default PlayerControls;
