import React from "react";
import { IControlIconProps } from "@components/Controls/types";
import { Repeat, RepeatOff, RepeatOne } from "@assets/icons";

const RepeatButton: React.FC<IControlIconProps> = ({
  repeatType,
  width,
  height,
  onClick,
}) => {
  switch (repeatType) {
    case "all":
      return <Repeat width={width} height={height} onClick={onClick} />;
    case "one":
      return <RepeatOne width={width} height={height} onClick={onClick} />;
    default:
      return <RepeatOff width={width} height={height} onClick={onClick} />;
  }
};

export default RepeatButton;
