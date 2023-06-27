import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticleDetailsComments.module.scss";
import {
  AppText as AppTextDeprecated,
  AppTextSize as AppTextSizeDeprecated,
} from "@/shared/ui/deprecated/AppText";
import { AddCommentForm } from "@/features/addCommentForm";
import { CommentList } from "@/entities/Comment";
import { useSelector } from "react-redux";
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from "@/pages/ArticleDetailsPage/model/selectors/comments";
import { getArticleComments } from "@/pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice";
import { addCommentForArticle } from "@/pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { fetchCommentsByArticleId } from "@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { ToggleFeatures } from "@/shared/lib/features";
import { AppText } from "@/shared/ui/redesigned/AppText";

interface ArticleDetailsCommentsProps {
  className?: string;
  id?: string;
}

const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
  const { id, className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const commentsError = useSelector(getArticleCommentsError);

  const comments = useSelector(getArticleComments.selectAll);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });
  return (
    <VStack
      fullWidth
      gap="16"
      className={classNames(s.articleDetailsComments, {}, [className])}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <AppText
            size={"l"}
            title={t("Comments")}
            className={s.commentTitle}
          />
        }
        off={
          <AppTextDeprecated
            size={AppTextSizeDeprecated.L}
            title={t("Comments")}
            className={s.commentTitle}
          />
        }
      />
      <AddCommentForm onSendComment={onSendComment} />

      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </VStack>
  );
});
export default ArticleDetailsComments;
