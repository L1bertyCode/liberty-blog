import { memo, Suspense, useEffect } from "react";
import { ErrorBoundary } from "./providers/ErrorBoundary";
import { useTheme } from "./providers/ThemePorvider";

import { Navbar } from "4widgets/Navbar";
import { Sidebar } from "4widgets/Sidebar";

import { classNames } from "7shared/lib/classNames/classNames";
import "1app/styles/index.scss";
import { useAppDispatch } from "7shared/lib/hooks/useAppDispatch";
import { getUserInited, userActions } from "6entities/User";
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
