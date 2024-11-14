import React from "react";
import { IComponentProps } from "@root/global-types";

const Progress: React.FC<IComponentProps> = ({ className }) => {
  return (
    <input className={className} type="range" min={0} max={100} step={1} />
  );
};

export default Progress;
