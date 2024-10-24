import { contextBridge, ipcRenderer } from "electron";
import { getFiles, readFile } from "./utils/files";

contextBridge.exposeInMainWorld("node", {
  test: () => process.versions.node,
  getFiles: () => getFiles(),
  readFile: (path: string) => readFile(path),
  getMusicFiles: async () => await ipcRenderer.invoke("get-music-files"),
  getMusicDirectory: async () =>
    await ipcRenderer.invoke("get-music-directory"),
  // saveSettings
  // loadSettings
});
