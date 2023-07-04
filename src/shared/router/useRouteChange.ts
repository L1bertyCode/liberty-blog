import { useEffect, useState } from "react";
import { matchPath, useLocation } from "react-router-dom";
import { AppRoutes, AppRoutesByPathPattern } from "../const/router";

export function useRouteChange() {
  const location = useLocation();
  const [appRoute, setAppRoute] = useState<AppRoutes>(AppRoutes.MAIN);
  useEffect(() => {
    Object.entries(AppRoutesByPathPattern).forEach(([patter, route]) => {
      if (matchPath(patter, location.pathname)) {
        setAppRoute(route);
      }
    });
  }, [location.pathname]);
  return appRoute;
}
