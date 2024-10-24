import { IComponentProps } from "@root/global-types";
import { ReactElement } from "react";

export interface ISidebarHeaderProps extends IComponentProps {
  toggleSize: () => void;
}

export interface IModuleItemProps extends IComponentProps {
  name?: string;
  icon: string | ReactElement;
  [key: string]: any;
}
