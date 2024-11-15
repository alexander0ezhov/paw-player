import React, { ChangeEvent, useCallback, useEffect, useRef } from "react";
import cn from "classnames";
import s from "../index.module.scss";
import { IProgressBarProps } from "@components/Controls/types";
import { createInterval, secondsToTime } from "@utils/func";

const nullTime = "0:00";
const interval = createInterval();

const ProgressBar: React.FC<IProgressBarProps> = ({
  className,
  audio,
  currentTrack,
  isPlaying,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const currentTimeRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const updateSeek = () => {
      if (inputRef.current)
        inputRef.current.value = `${Math.floor(audio.currentTime)}`;
      if (currentTimeRef.current)
        currentTimeRef.current.innerText = secondsToTime(audio.currentTime);
    };
    audio.onseeked = updateSeek;
    if (isPlaying) {
      interval.action(updateSeek);
    } else {
      interval.clear();
    }
    return () => {
      interval.clear();
      audio.onseeked = null;
    };
  }, [isPlaying]);

  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      (audio.currentTime = Number(e.target.value)),
    [audio.src],
  );

  return (
    <div className={cn(className, s.progressBar)}>
      <span ref={currentTimeRef}>{nullTime}</span>
      <input
        ref={inputRef}
        className={className}
        type="range"
        min={0}
        max={currentTrack?.duration || 0}
        step={1}
        onChange={onInputChange}
      />
      <span>{currentTrack?.clientDuration || nullTime}</span>
    </div>
  );
};

export default ProgressBar;
