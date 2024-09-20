import React from "react";
import { IComponentProps } from "@root/global-types";
import Sidebar from "@Components/Sidebar";
import Content from "@Components/Content";
import Controls from "@Components/Controls";
import s from "./index.module.scss";

const Layout: React.FC<IComponentProps> = () => {
  return (
    <div className={s.root}>
      <Sidebar className={s.sidebar} />
      <main className={s.main}>
        <Content className={s.content} />
        <Controls className={s.controls} />
      </main>
    </div>
  );
};

export default Layout;
