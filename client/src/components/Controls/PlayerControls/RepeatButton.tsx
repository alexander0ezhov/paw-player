import React from "react";
import { IControlIconProps, RepeatType } from "@components/Controls/types";
import { Repeat, RepeatOne } from "@assets/icons";

const repeat: RepeatType = "all";

const RepeatButton: React.FC<IControlIconProps> = ({ width, height }) => {
  return (
    <>
      {repeat === "all" ? (
        <Repeat width={width} height={height} />
      ) : (
        <RepeatOne width={width} height={height} />
      )}
    </>
  );
};

export default RepeatButton;
