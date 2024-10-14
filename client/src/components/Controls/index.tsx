import React from "react";
import cn from "classnames";
import globalcss from "@root/global.module.scss";
import { IComponentProps } from "@root/global-types";
import TrackInfo from "./elem/TrackInfo";
import PlayerControls from "./elem/PlayerControls";
import Actions from "./elem/Actions";
import s from "./index.module.scss";
import TrackSlider from "@components/Controls/elem/TrackSlider";

const Content: React.FC<IComponentProps> = ({ className }) => {
  return (
    <main className={cn(s.root, className)}>
      <TrackSlider />
      <div className={s.controlsContainer}>
        <TrackInfo />
        <PlayerControls />
        <Actions />
      </div>
    </main>
  );
};

export default Content;
