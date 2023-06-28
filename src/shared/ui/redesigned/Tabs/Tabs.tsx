import { ReactNode, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { Card, CardVariant } from "../Card/Card";

import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Tabs.module.scss";
import {
  Flex,
  FlexDirection,
  FlexGap,
} from "@/shared/ui/redesigned/Stack/Flex/Flex";

export interface TabItem {
  value: string;
  content: ReactNode;
}
interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
  direction?: FlexDirection;
  gap?: FlexGap;
}

export const Tabs = memo((props: TabsProps) => {
  const {
    className,
    tabs,
    value,
    onTabClick,
    direction = "row",
    gap = "8",
  } = props;
  const { t } = useTranslation();
  const clickHandle = useCallback((tab: TabItem) => {
    return () => {
      onTabClick(tab);
    };
  }, []);
  return (
    <Flex
      direction={direction}
      gap={gap}
      align="start"
      className={classNames(s.tabs, {}, [className])}>
      {tabs.map((tab) => {
        const isSelected = tab.value === value;
        return (
          <Card
            padding="8"
            onClick={clickHandle(tab)}
            className={classNames(s.tab, { [s.selected]: isSelected }, [])}
            key={tab.value}
            variant={tab.value === value ? "light" : "normal"}
            borderRadius="round_40">
            {tab.content}
          </Card>
        );
      })}
    </Flex>
  );
});
