import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "1app/porviders/ThemePorvider";

import { App } from "./1app/App";

import "1app/styles/index.scss";
import "./7shared/config/i18n/i18n";
import { StoreProvider } from "1app/porviders/StroreProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StoreProvider>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StoreProvider>
);
// npm rm @storybook/addon-essentials @storybook/addon-interactions @storybook/addon-links @storybook/blocks @storybook/react @storybook/react-webpack5 @storybook/testing-library storybook storybook-addon-themes eslint-plugin-storybook @storybook/addon-actions @storybook/builder-webpack5 @storybook/manager-webpack5 @storybook/addon-actions @storybook/builder-webpack4 @storybook/builder-webpack5 @storybook/manager-webpack4 @storybook/manager-webpack5
