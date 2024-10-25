import fs from "fs";

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
