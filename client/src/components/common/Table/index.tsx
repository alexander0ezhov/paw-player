import React from "react";
import cn from "classnames";
import { ITableComponentProps } from "./types";
import Headers from "./Headers";
import Body from "./Body";
import s from "./index.module.scss";
import { splitColumnsByVisibility } from "./util";

const Table: React.FC<ITableComponentProps> = ({
  className,
  keyColumn,
  columns = [],
  items = [],
  onItemClick,
  onItemDbClick,
}) => {
  const { hiddenColumns, visibleColumns } = splitColumnsByVisibility(columns);
  return (
    <div className={cn(className, s.root)}>
      <Headers columns={visibleColumns} />
      <Body
        columns={visibleColumns}
        items={items}
        onItemClick={onItemClick}
        onItemDbClick={onItemDbClick}
        keyColumn={keyColumn}
      />
    </div>
  );
};

export default Table;
