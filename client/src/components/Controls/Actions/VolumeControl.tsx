import React, { ChangeEvent, useCallback, useEffect, useRef } from "react";
import { IVolumeControlProps } from "@components/Controls/types";
import { VolumeUp } from "@assets/icons";
import Tooltip from "@components/common/Tooltip";
import s from "../index.module.scss";
import InputRange from "@components/common/InputRange";

const VolumeControl: React.FC<IVolumeControlProps> = ({ audio }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const currentVolumeRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const onVolumeChange = () => {
      const volume = `${Math.floor(audio.volume * 100)}`;
      if (inputRef.current) inputRef.current.value = volume;
      if (currentVolumeRef.current) currentVolumeRef.current.innerText = volume;
    };
    audio.onvolumechange = onVolumeChange;
    setTimeout(onVolumeChange);
    return () => {
      audio.onvolumechange = null;
    };
  }, []);

  const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
  }, []);

  return (
    <div>
      <Tooltip
        className={s.volumeTooltip}
        tooltipChildren={
          <div className={s.volume}>
            <VolumeUp width="1rem" heigh="1rem" />
            <InputRange
              ref={inputRef}
              min={0}
              max={100}
              step={1}
              onChange={onInputChange}
            />
            <span ref={currentVolumeRef}>{100}</span>
          </div>
        }
      >
        <VolumeUp width="1.3rem" heigh="1.3rem" />
      </Tooltip>
    </div>
  );
};

export default VolumeControl;
