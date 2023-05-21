import {
  Theme,
  ThemeProvider,
  useTheme,
} from "app/providers/ThemePorvider";
import { Decorator } from "@storybook/react";
import "app/styles/index.scss";
export const ThemeDecorator: Decorator = (Story) => {
  const { theme } = useTheme();
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
export const ThemeDecoratorDark: Decorator = (Story) => {
  const { theme } = useTheme();
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
