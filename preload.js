const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
  test: () => process.versions.node,
});
