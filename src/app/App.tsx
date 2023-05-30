import { memo, Suspense, useEffect } from "react";
import { ErrorBoundary } from "./providers/ErrorBoundary";
import { useTheme } from "./providers/ThemeProvider";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import { classNames } from "shared/lib/classNames/classNames";
import "app/styles/index.scss";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { getUserInited, userActions } from "entities/User";
import { AppRouter } from "./providers/router";
import { useSelector } from "react-redux";

export const App = memo(() => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <Suspense fallback="">
      <div className={classNames("app", {}, [theme])}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <ErrorBoundary>
            {inited && <AppRouter />}
          </ErrorBoundary>
        </div>
      </div>
    </Suspense>
  );
});
