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
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageNumber,
  getArticlesPageView,
  getArticlesPageHasMore,
} from "../../model/selectors/articlePageSelectors";
import { Page } from "7shared/ui/Page/Page";
import { fetchArticlesList } from "3pages/ArticlesPage/model/services/fetchArticleList/fetchArticlesList";

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

interface FetchArticleListProps {
  page?: number;
}
const ArticlesPage = memo((props: ArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);
  const page = useSelector(getArticlesPageNumber);
  const hasMore = useSelector(getArticlesPageHasMore);
  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  const onLoadNextPart = useCallback(() => {
    // dispatch(fetchNextArticlesPage());
    console.log("akjldsf;lkahsjd");

    if (hasMore && !isLoading) {

      dispatch(articlesPageActions.setPage(page + 1));

      dispatch(
        fetchArticlesList({
          page: page + 1,
        })
      );
    }
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(
      fetchArticlesList({
        page: 1,
      })
    );
  });
  return (
    <DynamicModuleLoader reducers={reducers}>
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
