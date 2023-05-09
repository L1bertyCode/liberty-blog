import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./ArticlesPage.module.scss";
import {
  ArticleViewSelector,
  ArticleList,
  ArticleView,
} from "6entities/Article";
import {
  DynamicModuleLoader,
  ReducersList,
} from "7shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from "3pages/ArticlesPage/model/slices/articlesPageSlice";
import { useAppDispatch } from "7shared/lib/hooks/useAppDispatch";
import { useInitialEffect } from "7shared/lib/hooks/useInitialEffect";

import { useSelector } from "react-redux";
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
  getArticlesPageInited,
} from "../../model/selectors/articlePageSelectors";

import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initeArticlesPage } from "../../model/services/initeArticlesPage/initeArticlesPage";

import { Page } from "7shared/ui/Page/Page";

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

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initeArticlesPage());
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
        <ArticleViewSelector
          view={view}
          onViewClick={onChangeView}
        />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </Page>
    </DynamicModuleLoader>
  );
});
export default ArticlesPage;
