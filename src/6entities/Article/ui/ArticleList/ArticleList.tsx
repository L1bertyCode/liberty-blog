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
import {
  AppText,
  AppTextSize,
} from "7shared/ui/AppText/AppText";

interface ArticleListProps {
  className?: string;
  articles?: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton
        className={s.card}
        key={index}
        view={view}
      />
    ));

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
          className={s.card}
        />
      );
    };

    if (!articles) {
      return null;
    }

    if (!isLoading && !articles.length) {
      return (
        <div
          className={classNames(s.articleList, {}, [
            className,
            s[view],
          ])}
        >
          <AppText
            size={AppTextSize.L}
            title={t("Article not found")}
          />
        </div>
      );
    }
    return (
      <div
        className={classNames(s.articleList, {}, [
          s[view],
          className,
        ])}
      >
        {articles?.length > 0
          ? articles.map(renderArticle)
          : null}
        {isLoading && getSkeletons(view)}
      </div>
    );
  }
);
