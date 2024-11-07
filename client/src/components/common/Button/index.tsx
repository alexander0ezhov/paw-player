import React from "react";
import cn from "classnames";
import { IButtonProps } from "@components/common/Button/types";
import s from "./index.module.scss";

const Button: React.FC<IButtonProps> = ({
  className,
  style,
  type,
  attach,
  onClick,
  children,
}) => {
  return (
    <label className={cn(s.root, attach && s[attach], className)} style={style}>
      <button className={s.button} type={type} onClick={onClick}>
        {children}
      </button>
    </label>
  );
};

export default Button;
