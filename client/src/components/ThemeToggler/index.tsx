import React, { useState } from "react";
import { IComponentProps } from "@root/global-types";
import { checkThemeMode, toggleThemeMode } from "@root/utils/func";
import { Moon, Sun } from "@assets/icons";

const ThemeToggler: React.FC<IComponentProps> = ({ className }) => {
  const [themeMode, setTogglerMode] = useState(checkThemeMode());

  const onClick = () => {
    const newThemeMode = toggleThemeMode();
    setTogglerMode(newThemeMode);
  };

  return (
    <span className={className} onClick={onClick}>
      {themeMode === "light" ? <Sun /> : <Moon />}
    </span>
  );
};

export default ThemeToggler;
