import { memo, Suspense } from "react";
import { ErrorBoundary } from "./porviders/ErrorBoundary";
import { useTheme } from "./porviders/ThemePorvider";
import { AppRouter } from "./porviders/ThemePorvider/router";

import { Navbar } from "4widgets/Navbar";
import { Sidebar } from "4widgets/Sidebar";

import { classNames } from "7shared/lib/classNames/classNames";
import "1app/styles/index.scss";

export const App = memo(() => {
  const { theme } = useTheme();

  return (
    <Suspense fallback="">
      <div className={classNames("app", {}, [theme])}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <div className="page-wrapper">
            <ErrorBoundary>
              <AppRouter />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </Suspense>
  );
});
