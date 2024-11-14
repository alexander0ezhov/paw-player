export const durationToTime = (duration: number) =>
  `${Math.trunc(duration / 60)}:${Math.round(duration % 60)
    .toString()
    .padStart(2, "0")}`;
