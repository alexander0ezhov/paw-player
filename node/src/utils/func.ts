export const durationToTime = (duration: number) =>
  `${Math.trunc(duration / 60)}:${Math.round(duration % 60)
    .toString()
    .padStart(2, "0")}`;

// TODO: unused. delete
export const uint8arrayToBase64 = (data: Uint8Array<ArrayBufferLike>) =>
  Buffer.from(data).toString("base64");
