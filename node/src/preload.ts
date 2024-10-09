const { contextBridge } = require("electron");
const fs = require("fs");
const { getFiles } = require("./utils/files");

contextBridge.exposeInMainWorld("node", {
  test: () => process.versions.node,
  getFiles: () => getFiles(),
});
