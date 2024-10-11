import React from "react";
import { createRoot } from "react-dom/client";

import "@assets/fonts/Roboto/font.css";
import "@themes/Aura/default.css";
import "@themes/Aura/light.css";
import "@themes/Aura/dark.css";
import "./style.css";

import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
