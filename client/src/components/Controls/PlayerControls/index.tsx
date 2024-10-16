import React from "react";

import { IComponentProps } from "@root/global-types";

import globalcss from "@root/global.module.scss";
import cn from "classnames";
import s from "../index.module.scss";

import PlayPauseButton from "./PlayPauseButton";
import RepeatButton from "./RepeatButton";
import { NextTrack, PrevTrack, Shuffle } from "@assets/icons";


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
      <PlayPauseButton className={globalcss.accentIcon} />
      <NextTrack {...smallControlsProps} />
      <Shuffle {...smallControlsProps} />
    </div>
  );
};

export default PlayerControls;
