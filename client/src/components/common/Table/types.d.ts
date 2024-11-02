import { IComponentProps } from "@root/global-types";

type ColumnType = {
  name: string;
  width?: number;
  hidden?: boolean;
};

type TableItemType = {
  key: string;
  [k: string]: any;
};

export interface ITableComponentProps extends IComponentProps {
  columns: ColumnType[];
  items: TableItemType[];
}

export interface IHeadersComponentProps extends IComponentProps {
  columns: ColumnType[];
}
