import { Suspense, useMemo } from "react";
import { Route, Routes } from "react-router-dom";

import { routesConfig } from "7shared/config/routesConfig/routesConfig";
import { PageLoader } from "4widgets/PageLoader";
import { useSelector } from "react-redux";
import { getUserAuthData } from "6entities/User";
export const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);
  const routes = useMemo(() => {
    return Object.values(routesConfig).filter((route) => {
      if (route.authOnly && !isAuth) {
        return false;
      }
      return true;
    });
  }, [isAuth]);
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => {
          return (
            <Route
              path={path}
              element={element}
              key={path}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};
