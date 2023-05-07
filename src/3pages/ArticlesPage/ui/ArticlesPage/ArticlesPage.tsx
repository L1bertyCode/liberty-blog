import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./ArticlesPage.module.scss";
import {
  ArtcileViewSelector,
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
import { useInitialEfect } from "7shared/lib/hooks/useInitialEfect";
import { fetchArticleList } from "../../model/services/fetchArticleList/fetchArticleList";
import { useSelector } from "react-redux";
import {
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView,
} from "../../model/selectors/articlePageSelectors";
import { Page } from "7shared/ui/Page/Page";

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

  const isLoading = useSelector(getArticlePageIsLoading);
  const error = useSelector(getArticlePageError);
  const view = useSelector(getArticlePageView);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );
  useInitialEfect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticleList({
      page: 1,
    }));
  });
  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <Page
        className={classNames(s.articlesPage, {}, [
          className,
        ])}
      >
        <ArtcileViewSelector
          view={view}
          onViewClick={onChangeView}
        />
        <ArticleList
          isLoading={isLoading}
          articles={articles}
          view={view}
        />
      </Page>
    </DynamicModuleLoader>
  );
});
export default ArticlesPage;
