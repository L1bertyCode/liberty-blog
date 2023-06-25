import { HTMLAttributeAnchorTarget, LegacyRef, memo } from "react";
import { useTranslation } from "react-i18next";

import { Article } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticleList.module.scss";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import { AppText, AppTextSize } from "@/shared/ui/deprecated/AppText";

import { ArticleView } from "@/entities/Article/model/consts/consts";
import { ToggleFeatures } from "@/shared/lib/features";
import { HStack } from "@/shared/ui/redesigned/Stack";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((item, index) => (
    <ArticleListItemSkeleton
      className={s.card}
      key={index}
      view={view}
    />
  ));

export const ArticleList = memo((props: ArticleListProps) => {
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
      <div className={classNames(s.ArticleList, {}, [className, s[view]])}>
        <AppText
          size={AppTextSize.L}
          title={t("Статьи не найдены")}
        />
      </div>
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <HStack
          wrap="wrap"
          gap="16"
          data-testid={"ArticleList"}>
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
        </HStack>
      }
      off={
        <HStack
          wrap="wrap"
          gap="16"
          data-testid={"ArticleList"}
          className={classNames(s.articleList, {}, [className, s[view]])}>
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
        </HStack>
      }
    />
  );
});
