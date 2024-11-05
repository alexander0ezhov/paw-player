import React from "react";
import { IComponentProps } from "@root/global-types";
import PageWrapper from "@components/common/PageWrapper";
import Header from "@components/common/Header";
import globalcss from "@root/global.module.scss";
import { useSettingsStore } from "@store/settings";

const Settings: React.FC<IComponentProps> = () => {
  const { themeMode } = useSettingsStore();
  return (
    <PageWrapper className={globalcss.page}>
      <Header>Settings</Header>
      <div className={globalcss.pageBody}>body</div>
    </PageWrapper>
  );
};

export default Settings;
