import { RouteProps } from "react-router-dom";

import { MainPage } from "3pages/MainPage";
import { AboutPage } from "3pages/AboutPage";
import { NotFoundPage } from "3pages/NotFoundPage";
import { ReactNode } from "react";
import { ProfilePage } from "3pages/ProfilePage";
import { ArticlesPage } from "3pages/ArticlesPage";
import { ArticleDetailsPage } from "3pages/ArticleDetailsPage";

export enum AppRoutes {
  MiAN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ARTICLES = "articles",
  ARTICLE_DETAILS = "article_details",

  // last
  NOT_FOUND = "not-found",
}
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MiAN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.ARTICLES]: "/article",
  [AppRoutes.ARTICLE_DETAILS]: "/article/", //+:id
  [AppRoutes.NOT_FOUND]: "*",
};

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};
export type ExtendsRouteProps = AppRouteProps & {
  icon?: ReactNode;
};

export const routesConfig: Record<
  AppRoutes,
  ExtendsRouteProps
> = {
  [AppRoutes.MiAN]: {
    path: RoutePath[AppRoutes.MiAN],
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath[AppRoutes.PROFILE],
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath[AppRoutes.ARTICLES],
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath[AppRoutes.ARTICLE_DETAILS]}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
