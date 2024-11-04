import fs from "fs";
import MusicMetadata from "music-metadata";

const loadMusicMetadataModule = async () =>
  await MusicMetadata.loadMusicMetadata();

export const getFiles = (): fs.Dirent[] => {
  const files = fs.readdirSync(__dirname, {
    withFileTypes: true,
    recursive: true,
  });
  console.log("files", files);
  return files;
};

export const readFile = (path: string): string => {
  const file = fs.readFileSync(path);
  return "data:audio/mp3;base64," + file.toString("base64");
};

export const getFileMetaData = async (path: string) => {
  const metaDataModule = await loadMusicMetadataModule();
  const name = path.split("/").reverse()[0];
  const meta = await metaDataModule.parseFile(path);
  console.log("meta", meta);
  return { path, name };
};
