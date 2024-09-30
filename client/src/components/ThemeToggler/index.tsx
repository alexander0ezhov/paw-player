import React from "react";
import { IComponentProps } from "@root/global-types";
import { toggleThemeMode } from "@root/utils/func";

const ThemeToggler: React.FC<IComponentProps> = ({ className }) => {
  return (
    <button className={className} onClick={toggleThemeMode}>
      toggle
    </button>
  );
};

export default ThemeToggler;
