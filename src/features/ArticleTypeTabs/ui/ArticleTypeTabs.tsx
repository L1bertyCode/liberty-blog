import { ArticleType } from "@/entities/Article/model/consts/consts";
import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import { Tabs as TabsDeprecatead } from "@/shared/ui/deprecated/Tabs";

import { TabItem, Tabs } from "@/shared/ui/redesigned/Tabs";
import { ToggleFeatures } from "@/shared/lib/features";

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem[]>(
    () => [
      { value: ArticleType.ALL, content: t("All") },
      { value: ArticleType.IT, content: t("IT") },
      {
        value: ArticleType.ECONOMICS,
        content: t("Economy"),
      },
      {
        value: ArticleType.SCIENCE,
        content: t("Science"),
      },
    ],
    [t],
  );

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType);
  }, []);
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Tabs
          direction="column"
          className={classNames("", {}, [className])}
          tabs={typeTabs}
          value={value}
          onTabClick={onTabClick}
        />
      }
      off={
        <TabsDeprecatead
          className={classNames("", {}, [className])}
          tabs={typeTabs}
          value={value}
          onTabClick={onTabClick}
        />
      }
    />
  );
});
