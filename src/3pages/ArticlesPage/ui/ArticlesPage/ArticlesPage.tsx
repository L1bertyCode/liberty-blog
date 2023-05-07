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
    dispatch(fetchArticleList());
    dispatch(articlesPageActions.initState());
  });
  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <div
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
      </div>
    </DynamicModuleLoader>
  );
});
export default ArticlesPage;
