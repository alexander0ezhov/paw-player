import React from "react";
import { IComponentProps } from "@root/global-types";
import cn from "classnames";
import s from "./index.module.scss";

const Content: React.FC<IComponentProps> = ({ className }) => {
  return <main className={cn(s.root, className)}>Content</main>;
};

export default Content;
