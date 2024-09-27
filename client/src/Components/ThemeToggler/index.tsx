import React from "react";
import { IComponentProps } from "@root/global-types";
import { toggleThemeMode } from "@root/utils/func";

const ThemeToggler: React.FC<IComponentProps> = () => {
  return <button onClick={toggleThemeMode}>toggle</button>;
};

export default ThemeToggler;
