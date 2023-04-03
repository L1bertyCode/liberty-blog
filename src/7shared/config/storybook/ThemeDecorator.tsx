import { Theme } from "1app/porviders/ThemePorvider";
import { Decorator } from "@storybook/react";
export const ThemeDecorator: Decorator = (Story, theme) => {
  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
};
