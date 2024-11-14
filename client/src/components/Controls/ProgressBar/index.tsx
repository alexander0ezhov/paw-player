import React, { useMemo } from "react";
import cn from "classnames";
import Progress from "./Progress";
import s from "../index.module.scss";
import { IProgressBarProps } from "@components/Controls/types";

const nullTime = "0:00";

const ProgressBar: React.FC<IProgressBarProps> = ({
  className,
  audio,
  currentTrack,
}) => {
  return (
    <div className={cn(className, s.progressBar)}>
      <span>{nullTime}</span>
      <Progress />
      <span>{currentTrack?.clientDuration || nullTime}</span>
    </div>
  );
};

export default ProgressBar;
