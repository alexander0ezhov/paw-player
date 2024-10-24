import { contextBridge, ipcRenderer } from "electron";
import { getFiles, readFile } from "./utils/files";

contextBridge.exposeInMainWorld("node", {
  test: () => process.versions.node,
  getFiles: () => getFiles(),
  readFile: () => readFile(),
  openFileDialog: () => ipcRenderer.send("open-file-dialog"),
  // saveSettings
  // loadSettings
});
