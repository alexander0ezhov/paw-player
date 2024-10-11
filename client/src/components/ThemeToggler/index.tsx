import React from "react";
import { IComponentProps } from "@root/global-types";
import { Moon, Sun } from "@assets/icons";
import { useSettingsStore } from "@store/settings";

const ThemeToggler: React.FC<IComponentProps> = ({ className }) => {
  const { themeMode, toggleThemeMode } = useSettingsStore();

  return (
    <span className={className} onClick={toggleThemeMode}>
      {themeMode === "light" ? <Moon /> : <Sun />}
    </span>
  );
};

export default ThemeToggler;
