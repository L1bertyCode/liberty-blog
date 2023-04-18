import React from "react";
import { RoutePath } from "7shared/config/routesConfig/routesConfig";
import AboutIcon from "7shared/assets/icons/about-20-20.svg";
import MainIcon from "7shared/assets/icons/main-20-20.svg";
import ProfileIcon from "7shared/assets/icons/profile-20-20.svg";
export interface SidebarItemInterface {
  path: string;
  text: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGElement>>;
}
export const SidebatItemsList: SidebarItemInterface[] = [
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
  {
    path: RoutePath.profile,
    text: "Profile",
    Icon: ProfileIcon,
  },
];
