import { Theme, ThemeProvider, useTheme } from "1app/porviders/ThemePorvider";
import { Decorator } from "@storybook/react";
import "1app/styles/index.scss";
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
