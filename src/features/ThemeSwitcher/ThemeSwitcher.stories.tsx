import type { Meta, StoryObj } from "@storybook/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Theme } from "@/shared/const/theme";

const meta = {
  title: "shared/ThemeSwitcher",
  component: ThemeSwitcher,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className={`app ${Theme.LIGHT}`}>
        <div className={` ${Theme.DARK}`}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <div className={` ${Theme.LIGHT}`}>
          <Story />
        </div>
      </div>
    ),
  ],
};
