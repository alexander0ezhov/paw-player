import { IComponentProps } from "@root/global-types";

type ColumnType = {
  key: string;
  name: string;
  width?: number | string;
  hidden?: boolean;
};

type TableItemType = {
  [key: string]: any;
};

export interface ITableComponentProps extends IComponentProps {
  columns: ColumnType[];
  items: TableItemType[];
  onItemClick?: (item: TableItemType) => void;
}

export interface IHeadersComponentProps extends IComponentProps {
  columns: ColumnType[];
}

export interface IRowComponentProps extends IComponentProps {
  columns: ColumnType[];
  item: TableItemType;
  onClick?: () => void;
}
