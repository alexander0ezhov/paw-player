import React from "react";
import { IComponentProps } from "@root/global-types";

const TrackSlider: React.FC<IComponentProps> = ({ className }) => {
  return (
    <div className={className}>
      <input type="range" />
    </div>
  );
};

export default TrackSlider;
