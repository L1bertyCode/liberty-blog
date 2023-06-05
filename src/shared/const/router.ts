
export enum AppRoutes {
    MiAN = "main",
    ABOUT = "about",
    PROFILE = "profile",
    ARTICLES = "articles",
    ARTICLE_DETAILS = "article_details",
    ARTICLE_CEATED = "articles_created",
    ARTICLE_EDIT = "articles_edit",
    ADMIN_PANEL = "admin_panel",
    FORBIDDEN = "forbidden",
  
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
    [AppRoutes.FORBIDDEN]: "/forbidden",
    [AppRoutes.NOT_FOUND]: "*",
  };
  