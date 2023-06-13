import { Suspense, memo, useCallback } from "react";
import { Route, Routes } from "react-router-dom";

import { routesConfig } from "@/shared/config/routesConfig/routesConfig";
import { PageLoader } from "@/widgets/PageLoader";
import { RequireAuth } from "./RequireAuth";
import { AppRouteProps } from "@/shared/types/router";
const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? (
            <RequireAuth roles={route.roles}>{element}</RequireAuth>
          ) : (
            element
          )
        }
      />
    );
  }, []);

  return <Routes>{Object.values(routesConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
