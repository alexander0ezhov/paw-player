import React from "react";
import { IComponentProps } from "@root/global-types";
import Header from "@components/common/Header";
import globalcss from "@root/global.module.scss";
import { useSettingsStore } from "@store/settings";

const Settings: React.FC<IComponentProps> = () => {
  const { themeMode } = useSettingsStore();
  return (
    <div className={globalcss.page}>
      <Header>Settings</Header>
      <div className={globalcss.pageBody}>body</div>
    </div>
  );
};

export default Settings;
