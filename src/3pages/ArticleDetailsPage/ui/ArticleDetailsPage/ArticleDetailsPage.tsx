import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./ArticleDetailsPage.module.scss";
import { ArticleDetails } from "6entities/Article/ui/ArticleDetails/ArticleDetails";
import { useNavigate, useParams } from "react-router-dom";
import {
  AppText,
  AppTextSize,
} from "7shared/ui/AppText/AppText";
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
import { useInitialEffect } from "7shared/lib/hooks/useInitialEffect";
import { useAppDispatch } from "7shared/lib/hooks/useAppDispatch";
import { fetchCommentsByArticleId } from "3pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { AddCommentForm } from "5features/addCommentForm";
import { addCommentForArticle } from "3pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle";
import { AppButton } from "7shared/ui/AppButton/AppButton";
import { RoutePath } from "7shared/config/routesConfig/routesConfig";
import { Page } from "4widgets/Page/Page";

import { ArticleList } from "6entities/Article";
import { fetchArticleRecommendations } from "3pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { getArticleRecommendations } from "3pages/ArticleDetailsPage/model/slices/articleDetailsPageRecomendationsSlice";
import { getArticleRecommendationsIsLoading } from "3pages/ArticleDetailsPage/model/selectors/recommendations";
import { articleDetailsPageReducer } from "3pages/ArticleDetailsPage/model/slices";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { VStack } from "7shared/ui/Stack";

interface ArticleDetailsPageProps {
  className?: string;
}
const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
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

    const recomendations = useSelector(
      getArticleRecommendations.selectAll
    );
    const recomendationsIsLoading = useSelector(
      getArticleRecommendationsIsLoading
    );
    const dispatch = useAppDispatch();

    const onSendComment = useCallback(
      (text: string) => {
        dispatch(addCommentForArticle(text));
      },
      [dispatch]
    );

    useInitialEffect(() => {
      dispatch(fetchCommentsByArticleId(id));
      dispatch(fetchArticleRecommendations());
    });

    if (!id) {
      return (
        <VStack
          max
          gap="16"
          justify="center"
          align="center"
          className={classNames(s.articleDetailsPage, {}, [
            className,
          ])}
        >
          {t("Article not found")}
        </VStack>
      );
    }

    return (
      <DynamicModuleLoader
        reducers={reducers}
        removeAfterUnmount
      >
        <Page
          className={classNames(s.articleDetailsPage, {}, [
            className,
          ])}
        >
          <VStack gap="16">
            <ArticleDetailsPageHeader />

            <ArticleDetails id={id} />
            <AppText
              size={AppTextSize.L}
              title={t("Recommended")}
              className={s.commentTitle}
            />
            <ArticleList
              className={s.recommendations}
              articles={recomendations}
              isLoading={recomendationsIsLoading}
              target={"_blank"}
            />
            <AppText
              size={AppTextSize.L}
              title={t("Comments")}
              className={s.commentTitle}
            />
            <AddCommentForm onSendComment={onSendComment} />

            <CommentList
              isLoading={commentsIsLoading}
              comments={comments}
            />
          </VStack>
        </Page>
      </DynamicModuleLoader>
    );
  }
);
export default ArticleDetailsPage;
