import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

import s from "./ArticleDetailsPage.module.scss";
import { ArticleDetails } from "entities/Article/ui/ArticleDetails/ArticleDetails";
import { useParams } from "react-router-dom";
import {
  AppText,
  AppTextSize,
} from "shared/ui/AppText/AppText";
import { CommentList } from "entities/Comment";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { getArticleComments } from "../../model/slices/articleDetailsCommentsSlice";
import { useSelector } from "react-redux";
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from "../../model/selectors/comments";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { fetchCommentsByArticleId } from "pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

import { Page } from "widgets/Page/Page";

import { getArticleRecommendations } from "pages/ArticleDetailsPage/model/slices/articleDetailsPageRecomendationsSlice";
import { getArticleRecommendationsIsLoading } from "pages/ArticleDetailsPage/model/selectors/recommendations";
import { articleDetailsPageReducer } from "pages/ArticleDetailsPage/model/slices";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { VStack } from "shared/ui/Stack";
import { ArticleRecomendationList } from "features/articleRecomendationList";
import ArticleDetailsComments from "../ArticleDetailsComments/ArticleDetailsComments";

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

    // if (!id) {
    //   return (
    //     <VStack
    //       max
    //       gap="16"
    //       justify="center"
    //       align="center"
    //       className={classNames(s.articleDetailsPage, {}, [
    //         className,
    //       ])}
    //     >
    //       {t("Article not found")}
    //     </VStack>
    //   );
    // }

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
            <ArticleRecomendationList />
            <ArticleDetailsComments id={id} />
          </VStack>
        </Page>
      </DynamicModuleLoader>
    );
  }
);
export default ArticleDetailsPage;