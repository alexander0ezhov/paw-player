import React from "react";
import { createRoot } from "react-dom/client";

import "@themes/light.css";
import "@themes/dark.css";
import "./style.css";

import App from "./App";
import { setThemeMode } from "@root/utils/func";

setThemeMode("dark");

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
