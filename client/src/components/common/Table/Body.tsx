import React from "react";
import s from "./index.module.scss";
import { ITableComponentProps } from "@components/common/Table/types";
import Row from "@components/common/Table/Row";

const Body: React.FC<ITableComponentProps> = ({
  columns,
  items,
  keyColumn,
  onItemClick,
  onItemDbClick,
}) => {
  return (
    <div className={s.tBody}>
      {items.map((item) => (
        <Row
          key={item[keyColumn]}
          columns={columns}
          item={item}
          onClick={() => onItemClick?.(item)}
          onDoubleClick={() => onItemDbClick?.(item)}
        />
      ))}
    </div>
  );
};

export default Body;
