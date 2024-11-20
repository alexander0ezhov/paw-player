export const getVolumeType = (volume: number) => {
  if (volume <= 20) return "low";
  if (volume > 20 && volume <= 70) return "medium";
  return "high";
};
