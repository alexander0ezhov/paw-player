import React from "react";
import cn from "classnames";
import s from "./index.module.scss";

const InputRange: React.FC<React.HTMLProps<HTMLInputElement>> =
  React.forwardRef(({ className, ...otherProps }, ref) => (
    <input
      ref={ref}
      className={cn(className, s.root)}
      type="range"
      {...otherProps}
    />
  ));

export default InputRange;
