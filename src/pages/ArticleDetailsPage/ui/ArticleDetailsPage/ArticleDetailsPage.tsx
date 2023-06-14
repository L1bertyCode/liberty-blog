import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticleDetailsPage.module.scss";
import { ArticleDetails } from "@/entities/Article/ui/ArticleDetails/ArticleDetails";
import { useParams } from "react-router-dom";

import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { Page } from "@/widgets/Page/Page";

import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/model/slices";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { VStack } from "@/shared/ui/Stack";
import { ArticleRecommendationList } from "@/features/articleRecomendationList";
import ArticleDetailsComments from "../ArticleDetailsComments/ArticleDetailsComments";

import { ArticleRating } from "@/features/articleRating";
import { getFeatureFlag } from "@/shared/lib/features";
import { Counter } from "@/entities/Counter";

interface ArticleDetailsPageProps {
  className?: string;
}
const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isArticleRatingEnabled = getFeatureFlag("isArticleRatingEnabled");

  // if (!id) {
  //   return (
  //     <VStack
  //       fullWidth
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
  if (!id) {
    return null;
  }
  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount>
      <Page className={classNames(s.articleDetailsPage, {}, [className])}>
        <VStack gap="16">
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          {isArticleRatingEnabled && <ArticleRating articleId={id} />}
          <ArticleRecommendationList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
});
export default ArticleDetailsPage;
