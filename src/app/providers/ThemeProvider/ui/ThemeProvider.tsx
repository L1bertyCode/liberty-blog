import { ReactNode, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "@/shared/lib/context/ThemeContext";

import { Theme } from "@/shared/const/theme";

import { useJsonSettings } from "@/entities/User";
import { LOCAL_STORAGE_THEME_KEY } from "@/shared/const/localstorage";

export type ThemeProviderProps = {
  children?: ReactNode;
  initialTheme?: Theme;
};
const fallbackTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ||
  (Theme.DARK as Theme);
const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
  const [isThemeInited, setThemeInited] = useState(false);

  const { theme: defaultTheme } = useJsonSettings();

  const [theme, setTheme] = useState<Theme>(
    initialTheme || defaultTheme || fallbackTheme || Theme.DARK,
  );

  useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme);
      setThemeInited(true);
    }
  }, [defaultTheme, isThemeInited]);
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);
  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
