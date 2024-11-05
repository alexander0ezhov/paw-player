import React from "react";
import cn from "classnames";
import { IComponentProps } from "@root/global-types";
import { usePlayerStore } from "@store/player";
import TrackInfo from "./TrackInfo/Index";
import Actions from "./Actions";
import PlayerControls from "./PlayerControls";
import ProgressBar from "./ProgressBar";
import s from "./index.module.scss";

const Controls: React.FC<IComponentProps> = ({ className }) => {
  const { isPlaying, play, pause } = usePlayerStore();
  return (
    <main className={cn(s.root, className)}>
      <ProgressBar />
      <div className={s.controlsContainer}>
        <TrackInfo />
        <PlayerControls isPlaying={isPlaying} play={play} pause={pause} />
        <Actions />
      </div>
    </main>
  );
};

export default Controls;
