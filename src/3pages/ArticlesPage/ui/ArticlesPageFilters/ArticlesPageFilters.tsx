import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageView,
} from "../../model/selectors/articlePageSelectors";

import { articlesPageActions } from "../../model/slices/articlesPageSlice";

import {
  ArticleView,
  ArticleViewSelector,
  ArticlesSortField,
  ArticlesSortSelector,
} from "6entities/Article";

import { useAppDispatch } from "7shared/lib/hooks/useAppDispatch";

import { Card } from "7shared/ui/Card/Card";
import { AppInput } from "7shared/ui/AppInput/AppInput";
import { SortOrder } from "7shared/types";

import { classNames } from "7shared/lib/classNames/classNames";
import s from "./ArticlesPageFilters.module.scss";

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo(
  (props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);

    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const search = useSelector(getArticlesPageSearch);

    const onChangeView = useCallback(
      (view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
      },
      [dispatch]
    );
    const onChangeOrder = useCallback(
      (newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
      },
      [dispatch]
    );
    const onChangeSort = useCallback(
      (newSort: ArticlesSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
      },
      [dispatch]
    );
    return (
      <div
        className={classNames(s.articlesPageFilters, {}, [
          className,
        ])}
      >
        <div className={s.sortWrapper}>
          <ArticlesSortSelector
            order={order}
            sort={sort}
            onChangsSort={onChangeSort}
            onChangeOrder={onChangeOrder}
          />
          <ArticleViewSelector
            view={view}
            onViewClick={onChangeView}
          />
        </div>
        <Card className={s.search}>
          <AppInput placeholder={t("Search") || ""} />
        </Card>
      </div>
    );
  }
);
