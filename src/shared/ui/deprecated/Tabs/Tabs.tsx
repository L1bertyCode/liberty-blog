import { ReactNode, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { Card, CardVariant } from "../Card/Card";

import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Tabs.module.scss";

export interface TabItem {
  value: string;
  content: ReactNode;
}
interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}
/**
 * @deprecated
 */
export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, value, onTabClick } = props;
  const { t } = useTranslation();
  const clickHandle = useCallback((tab: TabItem) => {
    return () => {
      onTabClick(tab);
    };
  }, []);
  return (
    <div className={classNames(s.tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          onClick={clickHandle(tab)}
          className={s.tab}
          key={tab.value}
          variant={
            tab.value === value ? CardVariant.NORMAL : CardVariant.OUTLINED
          }>
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
