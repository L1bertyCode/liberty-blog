import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { ArticleAditionalInfo } from "@/widgets/ArticleAditionalInfo";
import { Card } from "@/shared/ui/redesigned/Card";
import { useSelector } from "react-redux";
import { getArticleDetailsData } from "@/entities/Article";
import s from "./AditionalInfoContainer.module.scss";
import { useNavigate } from "react-router-dom";
import { getRouteArticleEdit } from "@/shared/const/router";

export const AditionalInfoContainer = memo(() => {
  const { t } = useTranslation();
  const article = useSelector(getArticleDetailsData);

  const navigate = useNavigate();

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticleEdit(article.id));
    }
  }, [article, navigate]);
  if (!article) {
    return null;
  }
  return (
    <Card
      className={s.card}
      padding="24"
      borderRadius="round_40">
      <ArticleAditionalInfo
        author={article.user}
        createdAt={article.createdAt}
        views={article.views}
        onEdit={onEditArticle}
      />
    </Card>
  );
});
