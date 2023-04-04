import { Theme, ThemeProvider, useTheme } from "1app/porviders/ThemePorvider";
import { Decorator } from "@storybook/react";
export const ThemeDecorator: Decorator = (Story) => {
  const { theme } = useTheme();
  return (
    <ThemeProvider>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
export const ThemeDecoratorDark: Decorator = (Story) => {
  return (
    <ThemeProvider>
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
