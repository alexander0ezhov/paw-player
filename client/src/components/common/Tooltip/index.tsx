import React, { useRef } from "react";
import cn from "classnames";
import { ITooltipProps } from "@components/common/Tooltip/types";
import s from "./index.module.scss";
import useOnClickOutside from "@hooks/useOnClickOutside";

const Tooltip: React.FC<ITooltipProps> = ({
  className,
  style,
  tooltipChildren,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = React.useState(false);
  useOnClickOutside(ref, setFocused.bind(null, false));

  return (
    <div
      ref={ref}
      className={cn(s.root, focused && s.focused, className)}
      style={style}
      onClick={setFocused.bind(null, true)}
    >
      <div className={s.tooltip}>{tooltipChildren}</div>
      {children}
    </div>
  );
};

export default Tooltip;
