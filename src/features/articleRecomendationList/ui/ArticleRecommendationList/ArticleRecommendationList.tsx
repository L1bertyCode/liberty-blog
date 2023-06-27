import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

import { memo } from "react";
import {
  AppText as AppTextDeprecated,
  AppTextSize as AppTextSizeDeprecated,
} from "@/shared/ui/deprecated/AppText";
import { ArticleList } from "@/entities/Article";

import { VStack } from "@/shared/ui/redesigned/Stack";
import { useArticleRecommendationsList } from "../../api/articleRecommendationsApi";
import { AppText } from "@/shared/ui/redesigned/AppText";
import { ToggleFeatures } from "@/shared/lib/features";

interface ArticleRecommendationListProps {
  className?: string;
}

export const ArticleRecommendationList = memo(
  (props: ArticleRecommendationListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const {
      isLoading,
      data: articles,
      error,
    } = useArticleRecommendationsList(3);
    if (isLoading || error || !articles) {
      return <div>error</div>;
    }

    return (
      <VStack
        data-testid={"ArticleRecommendationList"}
        gap="8"
        className={classNames("", {}, [className])}>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <AppText
              size={"l"}
              title={t("Recommended")}
            />
          }
          off={
            <AppTextDeprecated
              size={AppTextSizeDeprecated.L}
              title={t("Recommended")}
            />
          }
        />

        <ArticleList
          articles={articles}
          isLoading={isLoading}
          target={"_blank"}
        />
      </VStack>
    );
  },
);
