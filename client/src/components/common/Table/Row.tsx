import React from "react";
import { IRowComponentProps } from "@components/common/Table/types";
import s from "./index.module.scss";

const Row: React.FC<IRowComponentProps> = ({ columns, item, ...props }) => {
  return (
    <div className={s.tRow} {...props}>
      {columns.map((column) => (
        <span
          className={s.tCell}
          style={column.width ? { width: column.width } : { flex: 1 }}
        >
          {item[column.key]}
        </span>
      ))}
    </div>
  );
};

export default Row;
