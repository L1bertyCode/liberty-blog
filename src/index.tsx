import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemePorvider";

import { App } from "./app/App";

import "app/styles/index.scss";
import "./shared/config/i18n/i18n";
import { StoreProvider } from "app/providers/StoreProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>
);
