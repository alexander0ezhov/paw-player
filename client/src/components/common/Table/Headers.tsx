import React from "react";
import { IHeadersComponentProps } from "./types";
import s from "./index.module.scss";

const Headers: React.FC<IHeadersComponentProps> = ({ columns }) => {
  return (
    <div className={s.tHeaders}>
      {columns.map((column) => (
        <div className={s.tHeader} key={column.name}>
          {column.name}
        </div>
      ))}
    </div>
  );
};

export default Headers;
