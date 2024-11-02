import React from "react";
import { IComponentProps } from "@root/global-types";
import Header from "@components/common/Header";
import globalcss from "@root/global.module.scss";

const Settings: React.FC<IComponentProps> = () => {
  return (
    <div className={globalcss.page}>
      <Header>Settings</Header>
      <div className={globalcss.pageBody}>body</div>
    </div>
  );
};

export default Settings;
