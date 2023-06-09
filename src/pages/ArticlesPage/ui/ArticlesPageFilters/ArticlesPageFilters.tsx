import { memo, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from "../../model/selectors/articlePageSelectors";

import { articlesPageActions } from "../../model/slices/articlesPageSlice";

import {
  ArticleType,
  ArticleView,
  ArticlesSortField,
} from "@/entities/Article";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

import { Card } from "@/shared/ui/Card";
import { AppInput } from "@/shared/ui/AppInput";
import { SortOrder } from "@/shared/types/sort";

import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./ArticlesPageFilters.module.scss";
import { fetchArticlesList } from "@/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";
import { TabItem } from "@/shared/ui/Tabs/Tabs";
import { ArticleTypeTabs } from "@/features/ArticleTypeTabs";
import { ArticleViewSelector } from "@/features/ArticleViewSelector";
import { ArticlesSortSelector } from "@/features/ArticlesSortSelector";

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
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
      dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
      (view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
      },
      [dispatch]
    );

    const onChangeSort = useCallback(
      (newSort: ArticlesSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
      },
      [dispatch, fetchData]
    );

    const onChangeOrder = useCallback(
      (newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
      },
      [dispatch, fetchData]
    );

    const onChangeSearch = useCallback(
      (search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
      },
      [dispatch, debouncedFetchData]
    );

    const onChangeType = useCallback(
      (value: ArticleType) => {
        dispatch(articlesPageActions.setType(value));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
      },
      [dispatch, fetchData]
    );
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
          <AppInput
            placeholder={t("Search") || ""}
            value={search}
            onChange={onChangeSearch}
          />
        </Card>
        <ArticleTypeTabs
          className={s.tabs}
          value={type}
          onChangeType={onChangeType}
        />
      </div>
    );
  }
);
