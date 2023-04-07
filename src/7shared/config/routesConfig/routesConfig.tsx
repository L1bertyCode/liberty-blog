import { RouteProps } from "react-router-dom";

import { MainPage } from "3pages/MainPage";
import { AboutPage } from "3pages/AboutPage";
import { NotFoundPage } from "3pages/NotFoundPage";
import { ReactNode } from "react";

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
export type ExtendsRouteProps = RouteProps & { icon?: ReactNode };

export const routesConfig: Record<AppRoutes, ExtendsRouteProps> = {
  [AppRoutes.MiAN]: {
    path: RoutePath[AppRoutes.MiAN],
    element: <MainPage />,
    icon: <div>1</div>,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath[AppRoutes.ABOUT],
    element: <AboutPage />,
    icon: <div>1</div>,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
    icon: <div>1</div>,
  },
};
