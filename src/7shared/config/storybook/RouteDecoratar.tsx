import { Decorator } from "@storybook/react";
import "1app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
export const RouteDecoratar: Decorator = (Story) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
