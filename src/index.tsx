import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/app/providers/ThemeProvider";

import { App } from "./app/App";

import "@/app/styles/index.scss";
import "./shared/config/i18n/i18n";
import { StoreProvider } from "@/app/providers/StoreProvider";
import { ErrorBoundary } from "./app/providers/ErrorBoundary";
import { ForceUpdateProvider } from "./shared/lib/render/forceUpdate";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Container root not found. Failed to mount react app");
}

const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <ForceUpdateProvider>
            <App />
          </ForceUpdateProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);
