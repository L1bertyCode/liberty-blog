import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticlesSortSelector.module.scss";
import {
  AppSelect,
  SelectOption,
} from "@/shared/ui/AppSelect";

import { SortOrder } from "@/shared/types";
import { ArticlesSortField } from "@/entities/Article/model/consts/consts";

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
    const orderOprions = useMemo<SelectOption<SortOrder>[]>(
      () => [
        { value: "asc", content: t("ascending") },
        { value: "desc", content: t("descending") },
      ],
      [t]
    );

    const sortFieldOprions = useMemo<
      SelectOption<ArticlesSortField>[]
    >(
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
          onChange={onChangsSort}
        />
        <AppSelect
          className={s.order}
          label={t("by")}
          options={orderOprions}
          value={order}
          onChange={onChangeOrder}
        />
      </div>
    );
  }
);
