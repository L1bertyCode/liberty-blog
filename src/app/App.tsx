import { memo, Suspense, useEffect } from "react";
import { ErrorBoundary } from "./providers/ErrorBoundary";
import { useTheme } from "./providers/ThemeProvider";

import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

import { classNames } from "@/shared/lib/classNames/classNames";
import "@/app/styles/index.scss";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { getUserInited, initAuthData, userActions } from "@/entities/User";
import { AppRouter } from "./providers/router";
import { useSelector } from "react-redux";
import { PageLoader } from "@/widgets/PageLoader";
import { ToggleFeatures } from "@/shared/lib/features";
import { MainLayout } from "@/shared/layouts/MainLayout";
import { AppLoaderLayout } from "@/shared/layouts/AppLoaderLayout";

import { ScrollTollbar } from "@/widgets/ScrollTollbar";
import { useAppTollbar } from "./lib/useAppTollbar";

export const App = memo(() => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);
  const toolbar = useAppTollbar();
  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch, inited]);
  if (!inited) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <div
            id="app"
            className={classNames("app_redesigned", {}, [theme])}>
            <AppLoaderLayout />
          </div>
        }
        off={<PageLoader />}
      />
    );
  }
  // return (
  //   <Suspense fallback="">
  //     <div className={classNames("app", {}, [theme])}>
  //       <Navbar />
  //       <div className="content-page">
  //         <Sidebar />
  //         <ErrorBoundary>{inited && <AppRouter />}</ErrorBoundary>
  //       </div>
  //     </div>
  //   </Suspense>
  // );
  return (
    <ToggleFeatures
      feature={"isAppRedesigned"}
      off={
        <div
          id="app"
          className={classNames("app", {}, [theme])}>
          <Suspense fallback="">
            <Navbar />
            <div className="content-page">
              <Sidebar />
              <ErrorBoundary>{inited && <AppRouter />}</ErrorBoundary>
            </div>
          </Suspense>
        </div>
      }
      on={
        <div
          id="app"
          className={classNames("app_redesigned", {}, [theme])}>
          <Suspense fallback="">
            <MainLayout
              header={<Navbar />}
              content={<AppRouter />}
              sidebar={<Sidebar />}
              toolbar={toolbar}
            />
          </Suspense>
        </div>
      }
    />
  );
});
