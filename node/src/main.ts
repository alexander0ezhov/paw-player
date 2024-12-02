import path from "path";
import { app, BrowserWindow, ipcMain, dialog } from "electron";
import {
  createFolder,
  getFileMetaData,
  loadDataFromJson,
  loadMusicMetadataModule,
  saveDataToJson,
} from "./utils/files";

/* Consts */
const isDev: boolean = process.env.NODE_ENV === "development";
const USERDATA_PATH = app.getPath("userData");
const CONFIG_FOLDER_NAME = "_config";
const CONFIG_FOLDER = path.join(USERDATA_PATH, CONFIG_FOLDER_NAME);

const onInit = async () => {
  await loadMusicMetadataModule();
  await createFolder(CONFIG_FOLDER);
};

const createWindow = (): void => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: true,
      sandbox: false,
    },
  });
  win.webContents.openDevTools();

  isDev
    ? win.loadURL("http://localhost:3000/")
    : win.loadFile("./client/dist/index.html");
};

app
  .whenReady()
  .then(onInit)
  .then(() => {
    console.log("afterInit");
    createWindow();

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

/* Handlers */

ipcMain.handle("get-music-directory", async () => {
  const openedDialog = await dialog.showOpenDialog({
    properties: ["openFile", "openDirectory"],
  });
  return openedDialog.filePaths?.[0];
});

ipcMain.handle("get-music-files", async () => {
  const openedDialog = await dialog.showOpenDialog({
    properties: ["openFile", "multiSelections"],
    filters: [{ name: "Music", extensions: ["mp3"] }],
  });
  return await Promise.all(openedDialog.filePaths.map(getFileMetaData));
});

ipcMain.handle(
  "save-userdata",
  async (e, { name, data }: { name: string; data: string }) => {
    saveDataToJson(path.join(CONFIG_FOLDER, `${name}.json`), data);
    return null;
  },
);

ipcMain.handle("load-userdata", async (e, { name }: { name: string }) => {
  return loadDataFromJson(path.join(CONFIG_FOLDER, `${name}.json`));
});
