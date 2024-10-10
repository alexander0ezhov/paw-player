import fs from "fs";

export const getFiles = (): fs.Dirent[] => {
  const files = fs.readdirSync(__dirname, {
    withFileTypes: true,
    recursive: true,
  });
  console.log("files", files);
  return files;
};
