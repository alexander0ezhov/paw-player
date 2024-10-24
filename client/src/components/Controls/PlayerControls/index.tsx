import React, { useRef } from "react";

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
  const audio = useRef<HTMLAudioElement>(new Audio()).current;

  console.log(audio);

  const play = () => audio.play();
  const pause = () => audio.pause();
  // const setVolume = (value) => (audioRef.current.volume = value);

  return (
    <div className={cn(className, s.playerControls)}>
      <RepeatButton {...smallControlsProps} />
      <PrevTrack {...smallControlsProps} />
      <PlayPauseButton
        className={globalcss.accentIcon}
        onPlay={play}
        onPause={pause}
      />
      <NextTrack {...smallControlsProps} />
      <Shuffle {...smallControlsProps} />
    </div>
  );
};

export default PlayerControls;
