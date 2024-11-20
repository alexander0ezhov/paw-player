import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Tooltip from "@components/common/Tooltip";
import InputRange from "@components/common/InputRange";
import DynamicVolumeIcon from "./DynamicVolumeIcon";
import { IVolumeControlProps, VolumeIconTypes } from "../types";
import { getVolumeType } from "../func";
import s from "../index.module.scss";

const VolumeControl: React.FC<IVolumeControlProps> = ({ audio }) => {
  const [volumeIconType, setVolumeIconType] =
    useState<keyof typeof VolumeIconTypes>("high");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const currentVolumeRef = useRef<HTMLSpanElement | null>(null);

  const onVolumeChange = useCallback(() => {
    const volumeNumber = Math.floor(audio.volume * 100);
    const volume = `${volumeNumber}`;
    if (inputRef.current) inputRef.current.value = volume;
    if (currentVolumeRef.current) {
      const prevValue = +currentVolumeRef.current.innerText;
      const volumeType = getVolumeType(volumeNumber);
      if (prevValue !== volumeNumber) audio.muted = false;
      switch (true) {
        case audio.muted:
          setVolumeIconType("off");
          break;
        case volumeType !== getVolumeType(prevValue) ||
          (!audio.muted && volumeIconType === "off"):
          setVolumeIconType(volumeType);
          break;
        default:
          break;
      }
      currentVolumeRef.current.innerText = volume;
    }
  }, [inputRef.current, currentVolumeRef.current, volumeIconType]);

  useEffect(() => {
    audio.onvolumechange = onVolumeChange;
    setTimeout(onVolumeChange);
    return () => {
      audio.onvolumechange = null;
    };
  }, [onVolumeChange]);

  const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
  }, []);

  const toggleMuted = useCallback(() => {
    audio.muted = !audio.muted;
  }, [audio.muted]);

  return (
    <div>
      <Tooltip
        className={s.volumeTooltip}
        tooltipChildren={
          <div className={s.volume}>
            <DynamicVolumeIcon
              width="1rem"
              height="1rem"
              volumeType={volumeIconType}
              onClick={toggleMuted}
            />
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
        <DynamicVolumeIcon
          width="1.3rem"
          height="1.3rem"
          volumeType={volumeIconType}
        />
      </Tooltip>
    </div>
  );
};

export default VolumeControl;
