import { memo } from "react";
import { useTranslation } from "react-i18next";

import {
  Article,
  ArticleView,
} from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

import { classNames } from "7shared/lib/classNames/classNames";

import s from "./ArticleList.module.scss";

interface ArticleListProps {
  className?: string;
  articles?: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleList = memo(
  (props: ArticleListProps) => {
    const {
      className,
      articles,
      isLoading,
      view = ArticleView.SMALL,
    } = props;
    const { t } = useTranslation();

    const renderArticle = (article: Article) => {
      return (
        <ArticleListItem
          key={article.id}
          article={article}
          view={view}
          isLoading={isLoading}
        />
      );
    };
    if (isLoading) {
      return (
        <div
          className={classNames(s.articleList, {}, [
            className,
          ])}
        >
          <ArticleListItem isLoading />
          <ArticleListItem isLoading />
          <ArticleListItem isLoading />
          <ArticleListItem isLoading />
        </div>
      );
    }
    if (!articles) {
      return null;
    }

    return (
      <div
        className={classNames(s.articleList, {}, [
          className,
        ])}
      >
        {articles?.length > 0
          ? articles.map(renderArticle)
          : null}
      </div>
    );
  }
);
