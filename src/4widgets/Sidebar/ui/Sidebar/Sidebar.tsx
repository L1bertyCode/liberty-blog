import { memo, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { SidebarItem } from "../SidebarItem/SidebarItem";

import { SidebatItemsList } from "4widgets/Sidebar/model/items";

import { ThemeSwitcher } from "7shared/ui/ThemeSwitcher/ThemeSwitcher";
import { LanguageSwitcher } from "7shared/ui/LanguageSwitcher/LanguageSwitcher";

import {
  AppButton,
  AppButtonSize,
  AppButtonVariant,
} from "7shared/ui/AppButton/AppButton";

import { classNames } from "7shared/lib/classNames/classNames";
import s from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  const itemListMemo = useMemo(() => {
    return SidebatItemsList.map((item) => {
      return (
        <SidebarItem
          item={item}
          key={item.path}
          collapsed={collapsed}
        />
      );
    });
  }, [collapsed]);

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        s.sidebar,
        { [s.collapsed]: collapsed },
        [className]
      )}
    >
      <div className={s.links}>{itemListMemo}</div>

      <div className={s.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
      <AppButton
        data-testid="sidebar-toggle"
        onClick={() => setCollapsed((prev) => !prev)}
        className={s.collapseBtn}
        variant={AppButtonVariant.BACKGROUND}
        size={AppButtonSize.M}
        square={true}
      >
        {collapsed ? ">" : "<"}
      </AppButton>
    </div>
  );
});
