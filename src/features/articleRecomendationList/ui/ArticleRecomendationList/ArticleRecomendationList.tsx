import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

import { memo } from "react";
import {
  AppText,
  AppTextSize,
} from "shared/ui/AppText/AppText";
import { ArticleList } from "entities/Article";

import { VStack } from "shared/ui/Stack";
import { useArticleRecommendationsList } from "../../api/articleRecommendationsApi";

interface ArticleRecomendationListProps {
  className?: string;
}

export const ArticleRecomendationList = memo(
  (props: ArticleRecomendationListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const {
      isLoading,
      data: articles,
      error,
    } = useArticleRecommendationsList(3);
    console.log("data", articles);
    if (isLoading || error || !articles) {
      return <div>error</div>;
    }

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
          virtualized={false}
          articles={articles}
          isLoading={isLoading}
          target={"_blank"}
        />
      </VStack>
    );
  }
);