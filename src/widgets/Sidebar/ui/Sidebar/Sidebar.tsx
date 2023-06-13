import { memo, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { SidebarItem } from "../SidebarItem/SidebarItem";

import { ThemeSwitcher } from "@/features/ThemeSwitcher/ThemeSwitcher";
import { LanguageSwitcher } from "@/features/LanguageSwitcher/LanguageSwitcher";

import {
  AppButton,
  AppButtonSize,
  AppButtonVariant,
} from "@/shared/ui/AppButton";

import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Sidebar.module.scss";
import { getSidebarItems } from "@/widgets/Sidebar/model/selector/getSidebarItems";
import { useSelector } from "react-redux";
import { VStack } from "@/shared/ui/Stack";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const sidebatItemsList = useSelector(getSidebarItems);

  const itemListMemo = useMemo(() => {
    return sidebatItemsList.map((item) => {
      return (
        <SidebarItem
          item={item}
          key={item.path}
          collapsed={collapsed}
        />
      );
    });
  }, [collapsed, sidebatItemsList]);

  return (
    <aside
      data-testid="sidebar"
      className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [
        className,
      ])}>
      <VStack
        gap="8"
        className={s.links}>
        {itemListMemo}
      </VStack>

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
        square={true}>
        {collapsed ? ">" : "<"}
      </AppButton>
    </aside>
  );
});
