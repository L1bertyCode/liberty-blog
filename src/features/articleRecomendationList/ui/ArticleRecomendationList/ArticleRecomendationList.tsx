import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

import { memo } from "react";
import {
  AppText,
  AppTextSize,
} from "shared/ui/AppText/AppText";
import { ArticleList } from "entities/Article";
import { useSelector } from "react-redux";
import { getArticleRecommendations } from "pages/ArticleDetailsPage/model/slices/articleDetailsPageRecomendationsSlice";
import { getArticleRecommendationsIsLoading } from "pages/ArticleDetailsPage/model/selectors/recommendations";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { fetchArticleRecommendations } from "pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { VStack } from "shared/ui/Stack";

interface ArticleRecomendationListProps {
  className?: string;
}

export const ArticleRecomendationList = memo(
  (props: ArticleRecomendationListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const recomendations = useSelector(
      getArticleRecommendations.selectAll
    );
    const recomendationsIsLoading = useSelector(
      getArticleRecommendationsIsLoading
    );
    useInitialEffect(() => {
      dispatch(fetchArticleRecommendations());
    });
    return (
      <VStack
        gap="8"
        className={classNames("", {}, [className])}
      >
        <AppText
          size={AppTextSize.L}
          title={t("Recommended")}
        />
        <ArticleList
          articles={recomendations}
          isLoading={recomendationsIsLoading}
          target={"_blank"}
        />
      </VStack>
    );
  }
);
