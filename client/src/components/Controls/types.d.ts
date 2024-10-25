import { IComponentProps } from "@root/global-types";
import audio from "@components/Controls/PlayerControls/Audio";

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
