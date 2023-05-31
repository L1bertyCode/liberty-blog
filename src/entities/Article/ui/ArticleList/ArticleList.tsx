import {
  HTMLAttributeAnchorTarget,
  LegacyRef,
  memo,
} from "react";
import { useTranslation } from "react-i18next";

import { Article } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticleList.module.scss";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import {
  AppText,
  AppTextSize,
} from "@/shared/ui/AppText/AppText";

import { PAGE_ID } from "@/widgets/Page/Page";
import { ArticleView } from "@/entities/Article/model/consts/consts";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
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
      view = ArticleView.SMALL,
      isLoading,
      target,
    } = props;
    const { t } = useTranslation();




    if (!isLoading && !articles?.length) {
      return (
        <div
          className={classNames(s.ArticleList, {}, [
            className,
            s[view],
          ])}
        >
          <AppText
            size={AppTextSize.L}
            title={t("Статьи не найдены")}
          />
        </div>
      );
    }

    return (
      <div
        className={classNames(s.ArticleList, {}, [
          className,
          s[view],
        ])}
      >
        {articles.map((article) => (
          <ArticleListItem
            article={article}
            view={view}
            target={target}
            key={article.id}
            className={s.card}
          />
        ))}

        {isLoading && getSkeletons(view)}
      </div>
    );
  }
);
