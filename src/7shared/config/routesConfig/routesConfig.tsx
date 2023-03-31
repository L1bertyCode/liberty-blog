import { RouteProps } from "react-router-dom";

import { MainPage } from "3pages/MainPage";
import { AboutPage } from "3pages/AboutPage";
import { ReactElement, ReactNode } from "react";
import { NotFoundPage } from "3pages/NotFoundPage";

export type AppRouteProps = RouteProps;
export enum AppRoutes {
  MiAN = "main",
  ABOUT = "about",

  // last
  NOT_FOUND = "not-found",
}
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MiAN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOT_FOUND]: "*",

};

export const routesConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MiAN]: {
    path: RoutePath[AppRoutes.MiAN],
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
