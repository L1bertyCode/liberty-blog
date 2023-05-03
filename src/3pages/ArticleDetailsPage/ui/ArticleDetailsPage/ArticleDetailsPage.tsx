import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./ArticleDetailsPage.module.scss";
import { ArticleDetails } from "6entities/Article/ui/ArticleDetails/ArticleDetails";
import { useParams } from "react-router-dom";
import { AppText } from "7shared/ui/AppText/AppText";
import { CommentList } from "6entities/Comment";
import {
  DynamicModuleLoader,
  ReducersList,
} from "7shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from "../../model/slices/articleDetailsCommentsSlice";
import { useSelector } from "react-redux";
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from "../../model/selectors/comments";
import { useInitialEfect } from "7shared/lib/hooks/useInitialEfect";
import { useAppDispatch } from "7shared/lib/hooks/useAppDispatch";
import { fetchCommentsByArticleId } from "3pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { AddCommentForm } from "5features/addCommentForm";
import { addCommentForArticle } from "3pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle";

interface ArticleDetailsPageProps {
  className?: string;
}
const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = memo(
  (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    const commentsIsLoading = useSelector(
      getArticleCommentsIsLoading
    );
    const commentsError = useSelector(
      getArticleCommentsError
    );

    const comments = useSelector(
      getArticleComments.selectAll
    );
    const dispatch = useAppDispatch();

    const onSendComment = useCallback(
      (text: string) => {
        dispatch(addCommentForArticle(text));
      },
      [dispatch]
    );

    useInitialEfect(() =>
      dispatch(fetchCommentsByArticleId(id))
    );

    if (!id) {
      return (
        <div
          className={classNames(s.articleDetailsPage, {}, [
            className,
          ])}
        >
          {t("Article not found")}
        </div>
      );
    }

    return (
      <DynamicModuleLoader
        reducers={reducers}
        removeAfterUnmount
      >
        <div
          className={classNames(s.articleDetailsPage, {}, [
            className,
          ])}
        >
          <ArticleDetails id={id} />
          <AddCommentForm onSendComment={onSendComment} />
          <AppText
            title={t("Comments")}
            className={s.commentTitle}
          />
          <CommentList
            isLoading={commentsIsLoading}
            comments={comments}
          />
        </div>
      </DynamicModuleLoader>
    );
  }
);
export default ArticleDetailsPage;
