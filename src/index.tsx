import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "1app/porviders/ThemePorvider";

import { StroreProvider } from "1app/porviders/StroreProvider";
import { App } from "./1app/App";

import "./7shared/config/i18n/i18n";

import "1app/styles/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StroreProvider>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StroreProvider>
);
// npm rm @storybook/addon-essentials @storybook/addon-interactions @storybook/addon-links @storybook/blocks @storybook/react @storybook/react-webpack5 @storybook/testing-library storybook storybook-addon-themes eslint-plugin-storybook @storybook/addon-actions @storybook/builder-webpack5 @storybook/manager-webpack5 @storybook/addon-actions @storybook/builder-webpack4 @storybook/builder-webpack5 @storybook/manager-webpack4 @storybook/manager-webpack5
