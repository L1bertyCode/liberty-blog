import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

import s from "./ArticlesSortSelector.module.scss";
import {
  AppSelect,
  SelectOption,
} from "shared/ui/AppSelect/AppSelect";

import { SortOrder } from "shared/types";
import { ArticlesSortField } from "entities/Article/model/consts/consts";

interface ArticlesSortSelectorProps {
  className?: string;
  sort: ArticlesSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangsSort: (newSort: ArticlesSortField) => void;
}

export const ArticlesSortSelector = memo(
  (props: ArticlesSortSelectorProps) => {
    const {
      className,
      sort,
      order,
      onChangeOrder,
      onChangsSort,
    } = props;
    const { t } = useTranslation();
    const orderOprions = useMemo<SelectOption[]>(
      () => [
        { value: "asc", content: t("ascending") },
        { value: "desc", content: t("descending") },
      ],
      [t]
    );

    const sortFieldOprions = useMemo<SelectOption[]>(
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
      [t]
    );
    const changeSortHandler = useCallback(
      (newSort: string) => {
        onChangsSort(newSort as ArticlesSortField);
      },
      [onChangsSort]
    );
    const changeOrderHandler = useCallback(
      (newOrder: string) => {
        onChangeOrder(newOrder as SortOrder);
      },
      [onChangeOrder]
    );
    return (
      <div
        className={classNames(s.articlesSortSelector, {}, [
          className,
        ])}
      >
        <AppSelect
          label={t("Sort by")}
          options={sortFieldOprions}
          value={sort}
          onChange={changeSortHandler}
        />
        <AppSelect
          className={s.order}
          label={t("by")}
          options={orderOprions}
          value={order}
          onChange={changeOrderHandler}
        />
      </div>
    );
  }
);
