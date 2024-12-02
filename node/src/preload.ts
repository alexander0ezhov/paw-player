import { contextBridge, ipcRenderer } from "electron";
import {
  FileMetaDataType,
  getFiles,
  preparePicture,
  readFileStream,
} from "./utils/files";

const prepareFiles = (files: FileMetaDataType[]) =>
  files.map((file) => ({
    ...file,
    picture: preparePicture(file.picture),
  }));

contextBridge.exposeInMainWorld("node", {
  test: () => process.versions.node,
  getFiles: () => getFiles(),
  readFileStream: (path: string) => readFileStream(path),
  getMusicFiles: async () => {
    const files = (await ipcRenderer.invoke(
      "get-music-files",
    )) as FileMetaDataType[];
    return prepareFiles(files);
  },
  getMusicDirectory: async () =>
    await ipcRenderer.invoke("get-music-directory"),
  saveUserData: async (name: string, data: object) =>
    await ipcRenderer.invoke("save-userdata", {
      name,
      data: JSON.stringify(data),
    }),
  loadUserData: async (name: string) => {
    const data = await ipcRenderer.invoke("load-userdata", { name });
    // TODO: error handling
    return JSON.parse(data);
  },
});
