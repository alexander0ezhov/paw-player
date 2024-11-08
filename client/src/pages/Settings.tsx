import React from "react";
import { IComponentProps, ThemeModes } from "@root/global-types";
import PageWrapper from "@components/common/PageWrapper";
import Header from "@components/common/Header";
import globalcss from "@root/global.module.scss";
import { useSettingsStore } from "@store/settings";
import Select from "@components/common/Select";

const Settings: React.FC<IComponentProps> = () => {
  const { themeMode, setThemeMode } = useSettingsStore();
  const ThemeModesSelectItems = Object.values(ThemeModes).map((mode) => ({
    value: mode,
    text: mode,
  }));
  return (
    <PageWrapper className={globalcss.page}>
      <Header>Settings</Header>
      <div className={globalcss.pageBody}>
        <Select
          value={themeMode}
          items={ThemeModesSelectItems}
          onChange={(e) =>
            setThemeMode(e.currentTarget.value as keyof typeof ThemeModes)
          }
        />
      </div>
    </PageWrapper>
  );
};

export default Settings;
