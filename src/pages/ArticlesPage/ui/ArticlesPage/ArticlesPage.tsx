import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

import s from "./ArticlesPage.module.scss";
import { ArticleList } from "entities/Article";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  articlesPageReducer,
  getArticles,
} from "pages/ArticlesPage/model/slices/articlesPageSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";

import { useSelector } from "react-redux";
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
  getArticlesPageInited,
} from "../../model/selectors/articlePageSelectors";

import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";

import { Page } from "widgets/Page/Page";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";
import { useSearchParams } from "react-router-dom";
import { initArticlesPage } from "../../model/services/initeArticlesPage/initArticlesPage";

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = memo((props: ArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const inited = useSelector(getArticlesPageInited);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  let [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });
  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount={false}
    >
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(s.ArticlesPage, {}, [
          className,
        ])}
      >
        <ArticlesPageFilters />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
          className={s.list}
        />
      </Page>
    </DynamicModuleLoader>
  );
});
export default ArticlesPage;
