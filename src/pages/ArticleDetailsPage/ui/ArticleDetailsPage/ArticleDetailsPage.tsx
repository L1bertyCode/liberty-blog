import { memo } from "react";
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
import { VStack } from "@/shared/ui/redesigned/Stack";
import { ArticleRecommendationList } from "@/features/articleRecomendationList";
import ArticleDetailsComments from "../ArticleDetailsComments/ArticleDetailsComments";

import { ArticleRating } from "@/features/articleRating";
import {
  ToggleFeatures,
  getFeatureFlag,
  toggleFeatures,
} from "@/shared/lib/features";
import { Counter } from "@/entities/Counter";
import { Card } from "@/shared/ui/deprecated/Card";
import { StickyLayout } from "@/shared/layouts/StickyLayout";
import { DetailsContainer } from "../DetailsContainer/DetailsContainer";
import { AditionalInfoContainer } from "../AditionalInfoContainer/AditionalInfoContainer";

interface ArticleDetailsPageProps {
  className?: string;
}
const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const Counter2 = () => {
  return <div>Counter2</div>;
};

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isArticleRatingEnabled = getFeatureFlag("isArticleRatingEnabled");
  const isCounterEnabled = getFeatureFlag("isCounterEnabled");
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
  // const articleRatingCard = toggleFeatures({
  //   name: "isArticleRatingEnabled",
  //   on: () => <ArticleRating articleId={id} />,
  //   off: () => <Card>{t("Оценка статей скоро появится!")}</Card>,
  // });

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <StickyLayout
            content={
              <Page
                className={classNames(s.articleDetailsPage, {}, [className])}>
                <VStack gap="16">
                  <ArticleDetailsPageHeader />
                  <DetailsContainer id={id} />
                  {/* <ArticleDetails id={id} /> */}
                  <ArticleRating articleId={id} />
                  <ArticleRecommendationList />
                  <ArticleDetailsComments id={id} />
                </VStack>
              </Page>
            }
            right={<AditionalInfoContainer />}
          />
        }
        off={
          <Page className={classNames(s.articleDetailsPage, {}, [className])}>
            <VStack gap="16">
              <ArticleDetailsPageHeader />
              <ArticleDetails id={id} />
              <ToggleFeatures
                feature={"isArticleRatingEnabled"}
                on={<ArticleRating articleId={id} />}
                off={<Card>{t("Оценка статей скоро появится!")}</Card>}
              />
              <ArticleRecommendationList />
              <ArticleDetailsComments id={id} />
            </VStack>
          </Page>
        }
      />
    </DynamicModuleLoader>
  );
});
export default ArticleDetailsPage;
