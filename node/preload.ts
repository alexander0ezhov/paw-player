const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("node", {
  test: () => process.versions.node,
});
