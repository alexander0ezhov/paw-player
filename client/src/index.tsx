import React from "react";
import { createRoot } from "react-dom/client";

import "@assets/fonts/Roboto/font.css";
import "@themes/Glassy/default.css";
import "@themes/Glassy/light.css";
import "@themes/Glassy/dark.css";
import "./style.css";

import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
