export interface IPlayItemProps {
  image?: string;
  onPlayPauseButtonClick?: (e: any) => void;
  isCurrentTrack: boolean;
  isPlaying: boolean;
  hovered?: boolean;
}
