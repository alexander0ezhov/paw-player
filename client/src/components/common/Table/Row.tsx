import React from "react";
import { IRowComponentProps } from "@components/common/Table/types";
import s from "./index.module.scss";

const Row: React.FC<IRowComponentProps> = ({ columns, item, ...props }) => {
  // TODO: remove state and these handlers
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      className={s.tRow}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {columns.map((column) => (
        <span
          key={column.key}
          className={s.tCell}
          style={column.width ? { width: column.width } : { flex: 1 }}
        >
          {column.customRender
            ? column.customRender(item, hovered)
            : item[column.key]}
        </span>
      ))}
    </div>
  );
};

export default Row;
