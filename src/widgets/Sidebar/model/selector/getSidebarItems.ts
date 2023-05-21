import { getUserAuthData } from "entities/User";
import { createSelector } from "@reduxjs/toolkit";
import { SidebarItemInterface } from "../types/sidebar";
import { RoutePath } from "shared/config/routesConfig/routesConfig";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import ProfileIcon from "shared/assets/icons/profile-20-20.svg";
import ArticlesIcon from "shared/assets/icons/article-20-20.svg";
export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebatItemsList: SidebarItemInterface[] = [
      {
        path: RoutePath.main,
        text: "Main",
        Icon: MainIcon,
      },
      {
        path: RoutePath.about,
        text: "About",
        Icon: AboutIcon,
      },
    ];
    if (userData) {
      sidebatItemsList.push(
        {
          path: RoutePath.profile + userData?.id,
          text: "Profile",
          Icon: ProfileIcon,
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          text: "Articles",
          Icon: ArticlesIcon,
          authOnly: true,
        }
      );
    }
    return sidebatItemsList;
  }
);
