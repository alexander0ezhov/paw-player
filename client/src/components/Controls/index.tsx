import React from "react";
import cn from "classnames";
import { IComponentProps } from "@root/global-types";
import TrackInfo from "./TrackInfo/Index";
import Actions from "./Actions";
import PlayerControls from "./PlayerControls";
import ProgressBar from "./ProgressBar";
import s from "./index.module.scss";

const Content: React.FC<IComponentProps> = ({ className }) => {
  return (
    <main className={cn(s.root, className)}>
      <ProgressBar />
      <div className={s.controlsContainer}>
        <TrackInfo />
        <PlayerControls />
        <Actions />
      </div>
    </main>
  );
};

export default Content;
