import { ThemeProvider } from "1app/porviders/ThemePorvider";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./1app/App";

import "./7shared/config/i18n/i18n";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);


// npm rm @storybook/addon-essentials @storybook/addon-interactions @storybook/addon-links @storybook/blocks @storybook/react @storybook/react-webpack5 @storybook/testing-library storybook eslint-plugin-storybook @storybook/addon-actions @storybook/builder-webpack5 @storybook/manager-webpack5