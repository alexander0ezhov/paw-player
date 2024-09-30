import React from "react";
import { IComponentProps } from "@root/global-types";
import Sidebar from "@components/Sidebar";
import Content from "@components/Content";
import Controls from "@components/Controls";
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
