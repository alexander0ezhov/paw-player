import { IComponentProps } from "@root/global-types";
import { ReactNode } from "react";

type ColumnType = {
  key: string;
  name: string;
  width?: number | string;
  hidden?: boolean;
  customRender?: (item: TableItemType, hovered: boolean) => ReactNode;
};

type TableItemType = {
  [key: string]: any;
};

export interface ITableComponentProps extends IComponentProps {
  columns: ColumnType[];
  items: TableItemType[];
  keyColumn: string;
  onItemClick?: (item: TableItemType) => void;
  onItemDbClick?: (item: TableItemType) => void;
}

export interface IHeadersComponentProps extends IComponentProps {
  columns: ColumnType[];
}

export interface IRowComponentProps extends IComponentProps {
  columns: ColumnType[];
  item: TableItemType;
  onClick?: () => void;
  [key: string]: any;
}
