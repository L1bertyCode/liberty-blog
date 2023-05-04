import { memo } from "react";
import { useTranslation } from "react-i18next";

import {
  Article,
  ArticleView,
} from "../../model/types/article";

import { classNames } from "7shared/lib/classNames/classNames";
import s from "./ArticleListItem.module.scss";

interface ArticleListItemProps {
  className?: string;
  article?: Article;
  view?: ArticleView;
  isLoading?: boolean;
}

export const ArticleListItem = memo(
  (props: ArticleListItemProps) => {
    const {
      className,
      article,
      view = ArticleView.SMALL,
    } = props;

    const { t } = useTranslation();
    return (
      <div
        className={classNames(s.articleListItem, {}, [
          className,
        ])}
      >
        <div>{article?.title}</div>
      </div>
    );
  }
);
