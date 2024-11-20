import React from "react";
import { IActionsProps } from "@components/Controls/types";
import VolumeControl from "./VolumeControl";

const Actions: React.FC<IActionsProps> = ({ className, audio }) => {
  return (
    <div className={className}>
      <VolumeControl audio={audio} />
    </div>
  );
};

export default Actions;
