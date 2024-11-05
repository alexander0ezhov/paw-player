import React from "react";
import cn from "classnames";
import { IPageWrapperProps } from "./types";
import s from "./index.module.scss";

const PageWrapper: React.FC<IPageWrapperProps> = ({
  className,
  hasLayout,
  children,
}) => {
  return (
    <div className={cn(s.root, hasLayout && s.hasLayout, className)}>
      {children}
    </div>
  );
};

export default PageWrapper;
