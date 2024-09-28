import React, { RefObject, useCallback, useRef, useState } from "react";
import cn from "classnames";
import { IComponentProps } from "@root/global-types";
import globalcss from "@root/global.module.scss";
import useOnClickOutside from "@root/hooks/useOnClickOutside";
import SidebarHeader from "@Components/Sidebar/elem/SidebarHeader";
import s from "./index.module.scss";

const Sidebar: React.FC<IComponentProps> = ({ className }) => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef() as RefObject<HTMLElement>;
  const toggleExpanded = useCallback(
    () => setExpanded((prev) => !prev),
    [setExpanded],
  );

  useOnClickOutside(ref, setExpanded.bind(null, false));

  return (
    <aside
      className={cn(
        s.root,
        globalcss.container,
        expanded && s.expanded,
        className,
      )}
      ref={ref}
    >
      <SidebarHeader toggleSize={toggleExpanded} />
    </aside>
  );
};

export default Sidebar;
