import { contextBridge, ipcRenderer } from "electron";
import { getFiles, preparePicture, readFileStream } from "./utils/files";

const prepareFiles = (files: any[]) =>
  files.map((file) => ({
    ...file,
    picture: preparePicture(file.picture),
  }));

contextBridge.exposeInMainWorld("node", {
  test: () => process.versions.node,
  getFiles: () => getFiles(),
  readFileStream: (path: string) => readFileStream(path),
  getMusicFiles: async () => {
    const files = await ipcRenderer.invoke("get-music-files");
    return prepareFiles(files);
  },
  getMusicDirectory: async () =>
    await ipcRenderer.invoke("get-music-directory"),
  // saveSettings
  // loadSettings
});
