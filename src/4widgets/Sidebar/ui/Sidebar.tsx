import { memo, useState } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "7shared/lib/classNames/classNames";
import { ThemeSwitcher } from "7shared/ui/ThemeSwitcher/ThemeSwitcher";
import {
  AppButton,
  AppButtonSize,
  AppButtonVariant,
} from "7shared/ui/AppButton/AppButton";
import { AppNavLink } from "7shared/ui/AppNavLink/AppNavLink";
import { LanguageSwitcher } from "7shared/ui/LanguageSwitcher/LanguageSwitcher";

import AboutIcon from "7shared/assets/icons/about-20-20.svg";
import MainIcon from "7shared/assets/icons/main-20-20.svg";

import s from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      data-testid="sidebar"
      className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={s.links}>
        <AppNavLink to="/" className={s.link}>
          <MainIcon className={s.icon} style={{ color: "red" }} />
          <div className={s.item}>{!collapsed ? t("Main") : undefined}</div>
        </AppNavLink>
        <AppNavLink to="/about" className={s.link}>
          <AboutIcon className={s.icon} />
          <div className={s.item}>{!collapsed ? t("About") : undefined}</div>
        </AppNavLink>
      </div>
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
