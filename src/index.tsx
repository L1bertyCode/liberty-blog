import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "1app/providers/ThemePorvider";

import { App } from "./1app/App";

import "1app/styles/index.scss";
import "./7shared/config/i18n/i18n";
import { StoreProvider } from "1app/providers/StoreProvider";

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
