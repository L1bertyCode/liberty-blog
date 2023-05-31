import { Decorator } from "@storybook/react";
import "@/app/styles/index.scss";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
} from "react-router-dom";
export const RouteDecoratar: Decorator = (Story) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
