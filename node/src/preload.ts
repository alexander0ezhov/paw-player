import { contextBridge } from "electron";
import { getFiles } from "./utils/files";

contextBridge.exposeInMainWorld("node", {
  test: () => process.versions.node,
  getFiles: () => getFiles(),
});
