import { memo } from "react";
import { useTranslation } from "react-i18next";

import {
  Article,
  ArticleView,
} from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

import { classNames } from "7shared/lib/classNames/classNames";

import s from "./ArticleList.module.scss";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

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
      view = ArticleView.BIG,
    } = props;
    const { t } = useTranslation();

    const renderArticle = (article: Article) => {
      return (
        <ArticleListItem
          key={article.id}
          article={article}
          view={view}
          isLoading={isLoading}
          className={s.card}
        />
      );
    };
    if (isLoading) {
      return (
        <div
          className={classNames(s.articleList, {}, [
            className,
            s[view],
          ])}
        >
          {new Array(view === ArticleView.SMALL ? 9 : 3)
            .fill(0)
            .map((item, index) => (
              <ArticleListItemSkeleton
                className={s.card}
                key={index}
                view={view}
              />
            ))}
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
          s[view],
        ])}
      >
        {articles?.length > 0
          ? articles.map(renderArticle)
          : null}
      </div>
    );
  }
);