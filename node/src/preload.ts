import { contextBridge, ipcRenderer } from "electron";
import { getFiles, readFileStream } from "./utils/files";

contextBridge.exposeInMainWorld("node", {
  test: () => process.versions.node,
  getFiles: () => getFiles(),
  readFileStream: (path: string) => readFileStream(path),
  getMusicFiles: async () => await ipcRenderer.invoke("get-music-files"),
  getMusicDirectory: async () =>
    await ipcRenderer.invoke("get-music-directory"),
  // saveSettings
  // loadSettings
});
