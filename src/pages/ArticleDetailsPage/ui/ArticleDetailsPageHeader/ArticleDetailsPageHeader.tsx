import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import { AppButton } from "@/shared/ui/AppButton/AppButton";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getArticleDetailsData } from "@/entities/Article";
import { getCanEditArticle } from "@/pages/ArticleDetailsPage/model/selectors/article";
import { HStack } from "@/shared/ui/Stack";
import { RoutePath } from "@/shared/const/router";

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const article = useSelector(getArticleDetailsData);

    const navigate = useNavigate();

    const canEdit = useSelector(getCanEditArticle);
    const onBackToList = useCallback(() => {
      navigate(RoutePath.articles);
    }, [navigate]);
    const onEditArticle = useCallback(() => {
      navigate(
        RoutePath.article_details + article?.id + "/edit"
      );
    }, [article?.id, navigate]);
    return (
      <HStack
        justify="between"
        fullWidth
        className={classNames("", {}, [className])}
      >
        <AppButton onClick={onBackToList}>
          {t("Back to list")}
        </AppButton>
        {canEdit && (
          <AppButton onClick={onEditArticle}>
            {t("Edit")}
          </AppButton>
        )}
      </HStack>
    );
  }
);
