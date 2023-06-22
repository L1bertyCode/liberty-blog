import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticlesFilters.module.scss";
import { Card } from "@/shared/ui/redesigned/Card";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { ArticlesSortSelector } from "@/features/ArticlesSortSelector";
import { ArticleTypeTabs } from "@/features/ArticleTypeTabs";
import { ArticleType, ArticlesSortField } from "@/entities/Article";
import { SortOrder } from "@/shared/types/sort";
import { AppInput } from "@/shared/ui/redesigned/AppInput";
import SearchIcon from "@/shared/assets/icons/search.svg";
import { AppIcon } from "@/shared/ui/redesigned/AppIcon";

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticlesSortField;
  order: SortOrder;
  type: ArticleType;
  search: string;
  onChangeSearch: (value: string) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticlesSortField) => void;
  onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
  const {
    className,
    sort,
    order,
    type,
    search,
    onChangeSearch,
    onChangeOrder,
    onChangeSort,
    onChangeType,
  } = props;
  const { t } = useTranslation();
  return (
    <Card
      className={classNames(s.articlesFilters, {}, [className])}
      padding="24">
      <VStack gap="32">
        <AppInput
          placeholder={t("Search") || ""}
          value={search}
          onChange={onChangeSearch}
          addonLeft={<AppIcon Svg={SearchIcon} />}
        />

        <ArticleTypeTabs
          className={s.tabs}
          value={type}
          onChangeType={onChangeType}
        />
        <ArticlesSortSelector
          order={order}
          sort={sort}
          onChangeSort={onChangeSort}
          onChangeOrder={onChangeOrder}
        />
      </VStack>
    </Card>
  );
});
