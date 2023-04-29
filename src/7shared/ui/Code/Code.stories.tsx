import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "./Code";

import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";

const meta = {
  title: "7shared/Code",
  component: Code,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: `
    import type { Meta, StoryObj } from "@storybook/react";
    import { ArticleCodeBlockComponent } from "./ArticleCodeBlockComponent";
  
    import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";
  
    const meta = {
      title: "6entities/ArticleCodeBlockComponent",
      component: ArticleCodeBlockComponent,
      //tags: ["autodocs"],
      //argTypes: {},
      args: {},
    } satisfies Meta<typeof ArticleCodeBlockComponent>;
  
    export default meta;
    type Story = StoryObj<typeof meta>;
  
    export const Light: Story = {
      args: { children: "" },
    };
    
    `,
  },
};

export const Dark: Story = {
  args: {
    children: `
    import type { Meta, StoryObj } from "@storybook/react";
    import { ArticleCodeBlockComponent } from "./ArticleCodeBlockComponent";
  
    import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";
  
    const meta = {
      title: "6entities/ArticleCodeBlockComponent",
      component: ArticleCodeBlockComponent,
      //tags: ["autodocs"],
      //argTypes: {},
      args: {},
    } satisfies Meta<typeof ArticleCodeBlockComponent>;
  
    export default meta;
    type Story = StoryObj<typeof meta>;
  
    export const Light: Story = {
      args: { children: "" },
    };
    
    `,
  },
  decorators: [ThemeDecoratorDark],
};
