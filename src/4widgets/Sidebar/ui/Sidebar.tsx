import { memo, useState } from "react";
import { classNames } from "7shared/lib/classNames/classNames";
import { ThemeSwitcher } from "7shared/ui/ThemeSwitcher/ThemeSwitcher";
import s from "./Sidebar.module.scss";
import { AppButton } from "7shared/ui/AppButton/AppButton";
import { AppNavLink } from "7shared/ui/AppNavLink/AppNavLink";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "7shared/ui/LanguageSwitcher/LanguageSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={s.links}>
        <AppNavLink to="/" className={s.link}>
          {t("Main")}
        </AppNavLink>
        <AppNavLink to="/about" className={s.link}>
          {t("About")}
        </AppNavLink>
      </div>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
      <AppButton
        onClick={() => setCollapsed((prev) => !prev)}
        className={s.btn}
      >
        {collapsed ? ">" : "<"}
      </AppButton>
    </div>
  );
});
