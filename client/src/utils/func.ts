enum themeModes {
  dark = "dark",
  light = "light",
}

export type ThemeModeType = keyof typeof themeModes;

export const setThemeMode = (mode: ThemeModeType) => {
  document.body.dataset.theme = mode;
};

export const toggleThemeMode = (): void => {
  document.body.dataset.theme === themeModes.light
    ? setThemeMode(themeModes.dark)
    : setThemeMode(themeModes.light);
};
