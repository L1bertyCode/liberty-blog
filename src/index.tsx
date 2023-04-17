import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "1app/porviders/ThemePorvider";

import { App } from "./1app/App";

import "1app/styles/index.scss";
import "./7shared/config/i18n/i18n";
import { StoreProvider } from "1app/porviders/StoreProvider";

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
