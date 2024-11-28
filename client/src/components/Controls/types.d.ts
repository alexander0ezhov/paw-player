import React from "react";
import { IComponentProps, TrackType } from "@root/global-types";

interface IControlIconProps extends IComponentProps {
  width: number | string;
  height: number | string;
}

type RepeatType = "all" | "one" | null;

interface IPlayPauseButtonProps extends IComponentProps {
  onPlay: any;
  onPause: on;
  isPlaying: boolean;
}

interface IPlayerControlsProps extends IComponentProps {
  play: () => void;
  pause: () => void;
  nextTrack: () => void;
  isPlaying: boolean;
}

interface IProgressBarProps extends IComponentProps {
  audio: HTMLAudioElement;
  currentTrack?: TrackType;
  isPlaying: boolean;
}

interface IVolumeControlProps extends IComponentProps {
  audio: HTMLAudioElement;
}

interface IActionsProps extends IVolumeControlProps {}

export enum VolumeIconTypes {
  off = "off",
  low = "low",
  medium = "medium",
  high = "high",
}

export interface IVolumeIconProps extends React.SVGProps<SVGSVGElement> {
  volumeType: keyof typeof VolumeIconTypes;
}
