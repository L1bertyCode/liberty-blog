import { Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";

import {
  routesConfig,
} from "@/app/config/routesConfig/routesConfig";
import { PageLoader } from "@/widgets/PageLoader";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { RequireAuth } from "./RequireAuth";
import { AppRouteProps } from "@/shared/types/router";
export const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const renderWithWrapper = useCallback(
    (route: AppRouteProps) => {
      const element = (
        <Suspense fallback={<PageLoader />}>
          {route.element}
        </Suspense>
      );

      return (
        <Route
          path={route.path}
          element={
            route.authOnly ? (
              <RequireAuth>{element}</RequireAuth>
            ) : (
              element
            )
          }
          key={route.path}
        />
      );
    },
    []
  );
  return (
    <Routes>
      {Object.values(routesConfig).map(renderWithWrapper)}
    </Routes>
  );
};
