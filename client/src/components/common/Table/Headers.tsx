import React from "react";
import { IHeadersComponentProps } from "./types";
import s from "./index.module.scss";

const Headers: React.FC<IHeadersComponentProps> = ({ columns }) => {
  return columns.map((column) => (
    <div className={s.header} key={column.name}>
      {column.name}
    </div>
  ));
};

// TODO: memoize

export default Headers;
