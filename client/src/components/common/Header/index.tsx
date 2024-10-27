import React from "react";
import { IComponentProps } from "@root/global-types";
import s from "./index.module.scss";

const Header: React.FC<IComponentProps> = ({ children }) => {
  return <h2 className={s.root}>{children}</h2>;
};

export default Header;
