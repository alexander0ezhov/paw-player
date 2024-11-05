import { IComponentProps } from "@root/global-types";

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
  isPlaying: boolean;
}
