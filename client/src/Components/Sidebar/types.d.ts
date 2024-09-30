import { IComponentProps } from "@root/global-types";

export interface ISidebarHeaderProps extends IComponentProps {
  toggleSize: () => void;
}

export interface IModuleItemProps extends IComponentProps {
  name?: string;
  icon: string;
}
