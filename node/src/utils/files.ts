import fs from "fs";
import MusicMetadata from "music-metadata";
import { durationToTime } from "./func";

let MusicMetaDataModule: typeof MusicMetadata = null;
export const loadMusicMetadataModule = async () => {
  if (!MusicMetaDataModule) {
    MusicMetaDataModule = await MusicMetadata.loadMusicMetadata();
  }
  return MusicMetaDataModule;
};

export const getFiles = (): fs.Dirent[] => {
  const files = fs.readdirSync(__dirname, {
    withFileTypes: true,
    recursive: true,
  });
  console.log("files", files);
  return files;
};

export const readFileStream = (path: string): string => {
  const file = fs.readFileSync(path);
  return "data:audio/mp3;base64," + file.toString("base64");
};

export const getFileMetaData = async (path: string) => {
  const name = path.split("/").reverse()[0];
  const meta = await MusicMetaDataModule.parseFile(path);
  const { format } = meta;
  // console.dir("meta", meta);
  return {
    path,
    name,
    duration: format.duration,
    clientDuration: durationToTime(format.duration),
  };
};
