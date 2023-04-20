import { memo } from "react";
import { useTranslation } from "react-i18next";

import { AppNavLink } from "7shared/ui/AppNavLink/AppNavLink";

import { classNames } from "7shared/lib/classNames/classNames";
import s from "./SidebarItem.module.scss";
import { SidebarItemInterface } from "4widgets/Sidebar/model/items";

interface SidebarItemProps {
  item: SidebarItemInterface;
  collapsed: boolean;
  className?: string;
}

export const SidebarItem = memo(
  (props: SidebarItemProps) => {
    const { item, collapsed, className } = props;
    const { t } = useTranslation();
    return (
      <AppNavLink to={item.path} className={s.link}>
        <item.Icon
          className={s.icon}
          style={{ color: "red" }}
        />
        <div className={s.item}>
          {!collapsed ? t(item.text) : undefined}
        </div>
      </AppNavLink>
    );
  }
);
