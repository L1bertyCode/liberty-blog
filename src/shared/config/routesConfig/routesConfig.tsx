import { RouteProps } from "react-router-dom";

import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ReactNode } from "react";
import { ProfilePage } from "pages/ProfilePage";
import { ArticlesPage } from "pages/ArticlesPage";
import { ArticleDetailsPage } from "pages/ArticleDetailsPage";
import { ArticleEditPage } from "pages/ArticleEditPage";
import { AdminPanelPage } from "pages/AdminPanelPage";
import { UserRole } from "entities/User";

export enum AppRoutes {
  MiAN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ARTICLES = "articles",
  ARTICLE_DETAILS = "article_details",
  ARTICLE_CEATED = "articles_created",
  ARTICLE_EDIT = "articles_edit",
  ADMIN_PANEL = "admin_panel",

  // last
  NOT_FOUND = "not-found",
}
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MiAN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile/", //+:id
  [AppRoutes.ARTICLES]: "/articles",
  [AppRoutes.ARTICLE_DETAILS]: "/article/", //+:id
  [AppRoutes.ARTICLE_CEATED]: "article/new",
  [AppRoutes.ARTICLE_EDIT]: "article/:id/edit",
  [AppRoutes.ADMIN_PANEL]: "/admin",
  [AppRoutes.NOT_FOUND]: "*",
};

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
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
    path: `${RoutePath[AppRoutes.PROFILE]}:id`,
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
  [AppRoutes.ARTICLE_CEATED]: {
    path: RoutePath[AppRoutes.ARTICLE_CEATED],
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: RoutePath[AppRoutes.ARTICLE_EDIT],
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: RoutePath[AppRoutes.ADMIN_PANEL],
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN],
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
