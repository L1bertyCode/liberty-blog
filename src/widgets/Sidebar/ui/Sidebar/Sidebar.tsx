import { memo, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { SidebarItem } from "../SidebarItem/SidebarItem";

import { ThemeSwitcher } from "@/features/ThemeSwitcher/ThemeSwitcher";
import { LanguageSwitcher } from "@/features/LanguageSwitcher/LanguageSwitcher";

import {
  AppButton,
  AppButtonSize,
  AppButtonVariant,
} from "@/shared/ui/deprecated/AppButton";

import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Sidebar.module.scss";
import { getSidebarItems } from "@/widgets/Sidebar/model/selector/getSidebarItems";
import { useSelector } from "react-redux";
import { ToggleFeatures } from "@/shared/lib/features";
import { AppLogo } from "@/shared/ui/redesigned/AppLogo";

import { AppIcon } from "@/shared/ui/redesigned/AppIcon";
import ArrowIcon from "@/shared/assets/icons/arrow-bottom.svg";
import { VStack } from "@/shared/ui/redesigned/Stack";

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
          className={s.item}
        />
      );
    });
  }, [collapsed, sidebatItemsList]);

  return (
    <ToggleFeatures
      feature={"isAppRedesigned"}
      on={
        <aside
          data-testid="sidebar"
          className={classNames(
            s.sidebarRedesigned,
            { [s.collapsedRedesigned]: collapsed },
            [className],
          )}>
          <AppLogo
            size={collapsed ? 50 : 80}
            className={s.appLogo}
          />

          <VStack
            gap="8"
            className={s.itemsRedesigned}>
            {itemListMemo}
          </VStack>
          <div className={s.switchers}>
            <ThemeSwitcher />
            <LanguageSwitcher short={collapsed} />
          </div>
          <AppIcon
            Svg={ArrowIcon}
            data-testid="sidebar-toggle"
            onClick={() => setCollapsed((prev) => !prev)}
            className={s.collapseBtn}
            clickable
          />
        </aside>
      }
      off={
        <aside
          data-testid="sidebar"
          className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [
            className,
          ])}>
          <AppLogo className={s.appLogo} />

          <VStack
            gap="8"
            className={s.items}>
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
      }
    />
  );
});
