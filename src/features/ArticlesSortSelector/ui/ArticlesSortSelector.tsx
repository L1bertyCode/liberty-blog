import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticlesSortSelector.module.scss";
import { AppSelect, SelectOption } from "@/shared/ui/deprecated/AppSelect";

import { SortOrder } from "@/shared/types/sort";
import { ArticlesSortField } from "@/entities/Article/model/consts/consts";
import { ToggleFeatures } from "@/shared/lib/features";
import { Listbox } from "@/shared/ui/redesigned/Popups";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { AppText } from "@/shared/ui/redesigned/AppText";

interface ArticlesSortSelectorProps {
  className?: string;
  sort: ArticlesSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticlesSortField) => void;
}

export const ArticlesSortSelector = memo((props: ArticlesSortSelectorProps) => {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation();
  const orderOprions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      { value: "asc", content: t("ascending") },
      { value: "desc", content: t("descending") },
    ],
    [t],
  );

  const sortFieldOprions = useMemo<SelectOption<ArticlesSortField>[]>(
    () => [
      {
        value: ArticlesSortField.CREATED,
        content: t("creation date"),
      },
      {
        value: ArticlesSortField.TITLE,
        content: t("name"),
      },
      {
        value: ArticlesSortField.VIEWS,
        content: t("views"),
      },
    ],
    [t],
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <div
          className={classNames(s.articlesSortSelectorRedesigned, {}, [
            className,
          ])}>
          <VStack
            gap="8"
            align="start">
            <AppText title={t("Sort by")} />
            <Listbox
              // label={t("Sort by")}
              items={sortFieldOprions}
              value={sort}
              onChange={onChangeSort}
            />
            <Listbox
              className={s.order}
              // label={t("by")}
              items={orderOprions}
              value={order}
              onChange={onChangeOrder}
            />
          </VStack>
        </div>
      }
      off={
        <div className={classNames(s.articlesSortSelector, {}, [className])}>
          <AppSelect
            label={t("Sort by")}
            options={sortFieldOprions}
            value={sort}
            onChange={onChangeSort}
          />
          <AppSelect
            className={s.order}
            label={t("by")}
            options={orderOprions}
            value={order}
            onChange={onChangeOrder}
          />
        </div>
      }
    />
  );
});
