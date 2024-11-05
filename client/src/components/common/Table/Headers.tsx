import React from "react";
import { IHeadersComponentProps } from "./types";
import s from "./index.module.scss";

const Headers: React.FC<IHeadersComponentProps> = ({ columns }) => {
  return (
    <div className={s.tHeaders}>
      {columns.map((column) => (
        <span
          className={s.tHeader}
          style={column.width ? { width: column.width } : { flex: 1 }}
          key={column.name}
        >
          {column.name}
        </span>
      ))}
    </div>
  );
};

export default Headers;
