import React from "react";
import Sidebar from "@Components/Sidebar";
import s from "./index.module.scss";

const Layout: React.FC = () => {
  return (
    <div className={s.root}>
      <Sidebar></Sidebar>
    </div>
  );
};

export default Layout;
