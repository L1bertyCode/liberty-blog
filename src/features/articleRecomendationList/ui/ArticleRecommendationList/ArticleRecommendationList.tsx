import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

import { memo } from "react";
import { AppText, AppTextSize } from "@/shared/ui/AppText";
import { ArticleList } from "@/entities/Article";

import { VStack } from "@/shared/ui/Stack";
import { useArticleRecommendationsList } from "../../api/articleRecommendationsApi";

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
        <AppText
          size={AppTextSize.L}
          title={t("Recommended")}
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
