import React from "react";
import cn from "classnames";
import { IComponentProps } from "@root/global-types";
import Progress from "./Progress";
import s from "../index.module.scss";

const currentTime = "0:00";
const length = "3:54";

const ProgressBar: React.FC<IComponentProps> = ({ className }) => {
  return (
    <div className={cn(className, s.progressBar)}>
      {currentTime}
      <Progress />
      {length}
    </div>
  );
};

export default ProgressBar;
