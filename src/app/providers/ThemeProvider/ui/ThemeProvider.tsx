import { ReactNode, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "@/shared/lib/context/ThemeContext";

import { Theme } from "@/shared/const/theme";
import { LOCAL_STORAGE_THEME_KEY } from "@/shared/const/localstorage";
import { useJsonSettings } from "@/entities/User";

export type ThemeProviderProps = {
  children?: ReactNode;
  initialTheme?: Theme;
};

const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
  const [isThemeInited, setThemeInited] = useState(false);

  const { theme: defaultTheme } = useJsonSettings();

  const [theme, setTheme] = useState<Theme>(
    initialTheme || defaultTheme || Theme.LIGHT,
  );

  useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme);
      setThemeInited(true);
    }
  }, [defaultTheme, isThemeInited]);
  useEffect(() => {
    document.body.className = theme;
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
