import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticleRating.module.scss";
import { RatingCard } from "@/entities/Rating";
import { useGetArticleRating } from "../../api/artuckeRatingApi";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";

interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

export const ArticleRating = memo(
  (props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data ,isLoading} = useGetArticleRating({
      articleId,
      userId: userData?.id ?? "",
    });
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
