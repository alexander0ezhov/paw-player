import React from "react";
import s from "./index.module.scss";
import { ITableComponentProps } from "@components/common/Table/types";
import Row from "@components/common/Table/Row";

const Body: React.FC<ITableComponentProps> = ({
  columns,
  items,
  onItemClick,
}) => {
  return (
    <div className={s.tBody}>
      {items.map((item) => (
        <Row
          columns={columns}
          item={item}
          onClick={() => onItemClick?.(item)}
        />
      ))}
    </div>
  );
};

export default Body;
