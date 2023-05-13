import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./ArticleDetailsPageHeader.module.scss";
import { AppButton } from "7shared/ui/AppButton/AppButton";
import { RoutePath } from "7shared/config/routesConfig/routesConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserAuthData } from "6entities/User";
import { getArticleDetailsData } from "6entities/Article";
import { getCanEditArticle } from "3pages/ArticleDetailsPage/model/selectors/article";

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const canEdit = useSelector(getCanEditArticle);
    const onBackToList = useCallback(() => {
      navigate(RoutePath.articles);
    }, [navigate]);
    return (
      <div
        className={classNames(
          s.articleDetailsPageHeader,
          {},
          [className]
        )}
      >
        <AppButton onClick={onBackToList}>
          {t("Back to list")}
        </AppButton>
        {canEdit && (
          <AppButton
            onClick={onBackToList}
            className={s.editBtn}
          >
            {t("Edit")}
          </AppButton>
        )}
      </div>
    );
  }
);
