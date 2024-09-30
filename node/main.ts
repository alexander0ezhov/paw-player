const { app, BrowserWindow } = require("electron");
const path = require("node:path");
const isDev: boolean = process.env.NODE_ENV === "development";

const createWindow = (): void => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    devTools: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  isDev
    ? win.loadURL("http://localhost:3000/")
    : win.loadFile("./client/dist/index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
