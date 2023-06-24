import { memo } from "react";
import { useTranslation } from "react-i18next";

import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { SidebarItemInterface } from "@/widgets/Sidebar/model/types/sidebar";

import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./SidebarItem.module.scss";
import { AppNavLink as AppNavLinkDeprecated } from "@/shared/ui/deprecated/AppNavLink";
import { ToggleFeatures } from "@/shared/lib/features";
import { AppNavLink } from "@/shared/ui/redesigned/AppNavLink";
import { AppIcon } from "@/shared/ui/redesigned/AppIcon";

interface SidebarItemProps {
  item: SidebarItemInterface;
  collapsed: boolean;
  className?: string;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, collapsed, className } = props;
  const { t } = useTranslation();

  const isAuth = useSelector(getUserAuthData);
  if (item.authOnly && !isAuth) {
    return <></>;
  }
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <AppNavLink
          to={item.path}
          className={classNames(
            s.itemRedesigned,
            {
              [s.collapsedRedesigned]: collapsed,
            },
            [className],
          )}>
          <AppIcon
            Svg={item.Icon}
            className={s.icon}
          />
          <div className={s.link}>{!collapsed ? t(item.text) : undefined}</div>
        </AppNavLink>
      }
      off={
        <AppNavLinkDeprecated
          to={item.path}
          className={s.item}>
          <item.Icon
            className={s.icon}
            style={{ color: "red" }}
          />
          <div className={s.link}>{!collapsed ? t(item.text) : undefined}</div>
        </AppNavLinkDeprecated>
      }
    />
  );
});
