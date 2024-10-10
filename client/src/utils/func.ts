enum themeModes {
  dark = "dark",
  light = "light",
}

export type ThemeModeType = keyof typeof themeModes;

export const setThemeMode = (mode: ThemeModeType) => {
  document.body.dataset.theme = mode;
};

export const toggleThemeMode = () => {
  const newThemeMode =
    document.body.dataset.theme === themeModes.light
      ? themeModes.dark
      : themeModes.light;
  setThemeMode(newThemeMode);
  return newThemeMode;
};

export const checkThemeMode = () =>
  document.body.dataset.theme as keyof typeof themeModes;
