import { ColumnType } from "@components/common/Table/types";

export const splitColumnsByVisibility = (columns: ColumnType[]) => {
  return columns.reduce(
    (acc, column) => {
      column.hidden
        ? acc.hiddenColumns.push(column)
        : acc.visibleColumns.push(column);
      return acc;
    },
    { hiddenColumns: [] as ColumnType[], visibleColumns: [] as ColumnType[] },
  );
};
