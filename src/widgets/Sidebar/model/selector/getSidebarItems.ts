import { getUserAuthData } from "@/entities/User";
import { createSelector } from "@reduxjs/toolkit";
import { SidebarItemInterface } from "../types/sidebar";

import AboutIcon from "@/shared/assets/icons/about-20-20.svg";
import MainIcon from "@/shared/assets/icons/main-20-20.svg";
import ProfileIcon from "@/shared/assets/icons/profile-20-20.svg";
import ArticlesIcon from "@/shared/assets/icons/article-20-20.svg";
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from "@/shared/const/router";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebatItemsList: SidebarItemInterface[] = [
    {
      path: getRouteMain(),
      text: "Main",
      Icon: MainIcon,
    },
    {
      path: getRouteAbout(),
      text: "About",
      Icon: AboutIcon,
    },
  ];
  if (userData) {
    sidebatItemsList.push(
      {
        path: getRouteProfile(userData?.id),
        text: "Profile",
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        text: "Articles",
        Icon: ArticlesIcon,
        authOnly: true,
      },
    );
  }
  return sidebatItemsList;
});
