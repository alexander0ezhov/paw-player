import { IComponentProps } from "@root/global-types";

type ColumnType = {
  name: string;
  width?: number;
  hidden?: boolean;
};

type TableItemType = {
  [k: string]: any;
};

export interface ITableComponentProps extends IComponentProps {
  columns: ColumnType[];
  items: TableItemType[];
  keyField: string;
}

export interface IHeadersComponentProps extends IComponentProps {
  columns: ColumnType[];
}
