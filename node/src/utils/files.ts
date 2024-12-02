import fs from "fs";
import path from "path";
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

export const preparePicture = (picture: MusicMetadata.IPicture[]) =>
  picture?.map((pic) => ({
    ...pic,
    data: URL.createObjectURL(new Blob([pic.data])),
  }));

export const getFileMetaData = async (filePath: string) => {
  const name = filePath.split(path.sep).reverse()[0];
  const meta = await MusicMetaDataModule.parseFile(filePath);
  const { format, common } = meta;
  const { title, artists, artist, album, genre, year, picture } = common || {};
  return {
    path: filePath,
    name,
    duration: format.duration,
    clientDuration: durationToTime(format.duration),
    title,
    artists,
    artist,
    album,
    genre,
    year,
    picture,
  };
};

export const saveDataToJson = (path: string, data: string) => {
  fs.writeFileSync(path, data);
};

export const loadDataFromJson = (path: string) =>
  fs.readFileSync(path, { encoding: "utf-8" });

/* Types */

export type FileMetaDataType = Awaited<ReturnType<typeof getFileMetaData>>;
