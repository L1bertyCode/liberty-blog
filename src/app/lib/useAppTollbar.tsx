import { AppRoutes } from "@/shared/const/router";
import { useRouteChange } from "@/shared/router/useRouteChange";
import { ScrollTollbar } from "@/widgets/ScrollTollbar";
import { ReactElement } from "react";

export function useAppTollbar() {
const appRoute=useRouteChange()

  const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
    [AppRoutes.ARTICLES]: <ScrollTollbar />,
    [AppRoutes.ARTICLE_DETAILS]: <ScrollTollbar />,
  };
  return toolbarByAppRoute[appRoute];
}
