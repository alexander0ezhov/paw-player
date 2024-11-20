import React from "react";
import { VolumeUp, VolumeDown, VolumeMute, VolumeOff } from "@assets/icons";
import { IVolumeIconProps } from "@components/Controls/types";

const defaultProps = {
  width: "1rem",
  heigh: "1rem",
};

const DynamicVolumeIcon: React.FC<IVolumeIconProps> = ({
  volumeType,
  ...otherProps
}) => {
  switch (volumeType) {
    case "off":
      return <VolumeOff {...defaultProps} {...otherProps} />;
    case "low":
      return <VolumeMute {...defaultProps} {...otherProps} />;
    case "medium":
      return <VolumeDown {...defaultProps} {...otherProps} />;
    case "high":
    default:
      return <VolumeUp {...defaultProps} {...otherProps} />;
  }
};

export default DynamicVolumeIcon;
