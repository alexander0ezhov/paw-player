import fs from "fs";

export const getFiles = (): fs.Dirent[] => {
  const files = fs.readdirSync(__dirname, {
    withFileTypes: true,
    recursive: true,
  });
  console.log("files", files);
  return files;
};

export const readFile = (): string => {
  const file = fs.readFileSync("~/tools/sample.mp3");
  return "data:audio/mp3;base64," + file.toString("base64");
};
