import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticleRating.module.scss";
import { RatingCard } from "@/entities/Rating";

interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

export const ArticleRating = memo(
  (props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    return (
      <RatingCard
        className={classNames(s.articleRating, {}, [
          className,
        ])}
        title={t("Rate the article")}
        feedbackTitle={t(
          "Leave your feedback about the article, it will help improve the quality"
        )}
      />
    );
  }
);
