import { getUserAuthData } from "@/entities/User";
import { createSelector } from "@reduxjs/toolkit";
import { SidebarItemInterface } from "../types/sidebar";

import AboutIconDeprecated from "@/shared/assets/icons/about-20-20.svg";
import MainIconDeprecated from "@/shared/assets/icons/main-20-20.svg";
import ProfileIconDeprecated from "@/shared/assets/icons/profile-20-20.svg";
import ArticlesIconDeprecated from "@/shared/assets/icons/article-20-20.svg";
import MainIcon from "@/shared/assets/icons/home.svg";
import ArticlesIcon from "@/shared/assets/icons/article.svg";
import AboutIcon from "@/shared/assets/icons/Info.svg";
import ProfileIcon from "@/shared/assets/icons/avatar.svg";
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from "@/shared/const/router";
import { toggleFeatures } from "@/shared/lib/features";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebatItemsList: SidebarItemInterface[] = [
    {
      path: getRouteMain(),
      text: "Main",
      Icon: toggleFeatures({
        name: "isAppRedesigned",
        off: () => MainIconDeprecated,
        on: () => MainIcon,
      }),
    },
    {
      path: getRouteAbout(),
      text: "About",
      Icon: toggleFeatures({
        name: "isAppRedesigned",
        off: () => AboutIconDeprecated,
        on: () => AboutIcon,
      }),
    },
  ];
  if (userData) {
    sidebatItemsList.push(
      {
        path: getRouteProfile(userData?.id),
        text: "Profile",
        Icon: toggleFeatures({
          name: "isAppRedesigned",
          off: () => ProfileIconDeprecated,
          on: () => ProfileIcon,
        }),
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        text: "Articles",
        Icon: toggleFeatures({
          name: "isAppRedesigned",
          off: () => ArticlesIconDeprecated,
          on: () => ArticlesIcon,
        }),
        authOnly: true,
      },
    );
  }
  return sidebatItemsList;
});
