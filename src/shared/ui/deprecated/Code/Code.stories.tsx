import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "./Code";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";

const meta = {
  title: "shared/deprecated/Code",
  component: Code,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    text: `
    import type { Meta, StoryObj } from "@storybook/react";
    import { ArticleCodeBlockComponent } from "./ArticleCodeBlockComponent";
  
    import { ThemeDecoratorDark } from "shared/config/storybook/ThemeDecorator";
  
    const meta = {
      title: "entities/ArticleCodeBlockComponent",
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
    text: `
    import type { Meta, StoryObj } from "@storybook/react";
    import { ArticleCodeBlockComponent } from "./ArticleCodeBlockComponent";
  
    import { ThemeDecoratorDark } from "shared/config/storybook/ThemeDecorator";
  
    const meta = {
      title: "entities/ArticleCodeBlockComponent",
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
