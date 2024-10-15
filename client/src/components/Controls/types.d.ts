import { IComponentProps } from "@root/global-types";

interface IControlIconProps extends IComponentProps {
  width: number | string;
  height: number | string;
}

type RepeatType = "all" | "one" | null;
