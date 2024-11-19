import React from "react";
import cn from "classnames";
import s from "./index.module.scss";

const InputRange: React.FC<React.HTMLProps<HTMLInputElement>> = ({
  className,
  ...otherProps
}) => <input className={cn(className, s.root)} type="range" {...otherProps} />;

export default InputRange;
