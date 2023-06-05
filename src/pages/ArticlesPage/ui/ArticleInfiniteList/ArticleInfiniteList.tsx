import { memo } from "react";
import { useTranslation } from "react-i18next";

import s from "./ArticleInfiniteList.module.scss";
import { useSelector } from "react-redux";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "@/pages/ArticlesPage/model/selectors/articlePageSelectors";

import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect";
import { initArticlesPage } from "@/pages/ArticlesPage/model/services/initeArticlesPage/initArticlesPage";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { ArticleList } from "@/entities/Article";
import { getArticles } from "@/pages/ArticlesPage/model/slices/articlesPageSlice";
import { AppText } from "@/shared/ui/AppText";

interface ArticleInfiniteListProps {
  className?: string;
}

const ArticleInfiniteList = memo(
  (props: ArticleInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);

    let [searchParams] = useSearchParams();

    useInitialEffect(() => {
      dispatch(initArticlesPage(searchParams));
    });
    if (error) {
      return (
        <AppText text={t("Error loading articles") || ""} />
      );
    }
    return (
      <ArticleList
        isLoading={isLoading}
        view={view}
        articles={articles}
        className={s.list}
      />
    );
  }
);
export default ArticleInfiniteList;
