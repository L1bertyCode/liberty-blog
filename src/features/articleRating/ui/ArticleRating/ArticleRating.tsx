import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticleRating.module.scss";
import { RatingCard } from "@/entities/Rating";
import {
  useGetArticleRating,
  useRateArticle,
} from "../../api/articleRatingApi";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { Skeleton } from "@/shared/ui/Skeleton";

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? "",
  });
  const [rateArticleMutation] = useRateArticle();
  const rating = data?.[0];

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          userId: userData?.id ?? "",
          articleId,
          rate: starsCount,
          feedback,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [articleId, rateArticleMutation, userData?.id]
  );
  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle]
  );
  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle]
  );

  if (isLoading) {
    return <Skeleton width={"100%"} height={"120px"} />;
  }

  return (
    <RatingCard
      onCancel={onCancel}
      onAccept={onAccept}
      className={classNames(s.articleRating, {}, [
        className,
      ])}
      rate={rating?.rate}
      title={t("Rate the article")}
      feedbackTitle={t(
        "Leave your feedback about the article, it will help improve the quality"
      )}
    />
  );
});
export default ArticleRating;
