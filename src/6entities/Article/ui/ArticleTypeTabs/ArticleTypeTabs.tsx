import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import { TabItem, Tabs } from "7shared/ui/Tabs/Tabs";
import { ArticleType } from "6entities/Article/model/types/article";

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo(
  (props: ArticleTypeTabsProps) => {
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
      [t]
    );

    const onTabClick = useCallback((tab: TabItem) => {
      onChangeType(tab.value as ArticleType);
    }, []);
    return (
      <Tabs
        className={classNames("", {}, [
          className,
        ])}
        tabs={typeTabs}
        value={value}
        onTabClick={onTabClick}
      />
    );
  }
);
