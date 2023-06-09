import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { ArticleType } from "@/entities/Article";

import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./ArticlesPageFilters.module.scss";

import { TabItem } from "@/shared/ui/deprecated/Tabs/Tabs";
import { ArticleTypeTabs } from "@/features/ArticleTypeTabs";
import { ArticleViewSelector } from "@/features/ArticleViewSelector";
import { ArticlesSortSelector } from "@/features/ArticlesSortSelector";
import { Card } from "@/shared/ui/redesigned/Card";
import { Card as CardDeprecated } from "@/shared/ui/deprecated/Card";
import { AppInput as AppInputDeprecated } from "@/shared/ui/deprecated/AppInput";
import { useArticleFilters } from "../../lib/hooks/useArticleFilters";

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const {
    view,
    order,
    sort,
    search,
    type,
    onChangeView,
    onChangeSort,
    onChangeOrder,
    onChangeSearch,
    onChangeType,
  } = useArticleFilters();

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

  return (
    <div className={classNames(s.articlesPageFilters, {}, [className])}>
      <div className={s.sortWrapper}>
        <ArticlesSortSelector
          order={order}
          sort={sort}
          onChangeSort={onChangeSort}
          onChangeOrder={onChangeOrder}
        />
        <ArticleViewSelector
          view={view}
          onViewClick={onChangeView}
        />
      </div>
      <CardDeprecated className={s.search}>
        <AppInputDeprecated
          placeholder={t("Search") || ""}
          value={search}
          onChange={onChangeSearch}
        />
      </CardDeprecated>
      <ArticleTypeTabs
        className={s.tabs}
        value={type}
        onChangeType={onChangeType}
      />
    </div>
  );
});
