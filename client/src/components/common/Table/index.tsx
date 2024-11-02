import React from "react";
import cn from "classnames";
import { ITableComponentProps } from "./types";
import Headers from "./Headers";
import s from "./index.module.scss";
import { splitColumnsByVisibility } from "./util";

const Table: React.FC<ITableComponentProps> = ({
  className,
  columns,
  items,
}) => {
  const { hiddenColumns, visibleColumns } = splitColumnsByVisibility(columns);
  return (
    <div
      className={cn(className, s.root)}
      style={{
        gridTemplateColumns: visibleColumns
          .map((el) => el.width || "1fr")
          .join(" "),
      }}
    >
      <Headers columns={visibleColumns} />
      {items.map((item) => {
        return visibleColumns.map((column) => {
          return <div>{item[column.name]}</div>;
        });
      })}
    </div>
  );
};

Table.defaultProps = {
  columns: [],
  items: [],
};

export default Table;
