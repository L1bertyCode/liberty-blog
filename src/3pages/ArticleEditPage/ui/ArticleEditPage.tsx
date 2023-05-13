import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./ArticleEditPage.module.scss";
import { Page } from "4widgets/Page/Page";
import { useNavigate, useParams } from "react-router-dom";
import { RoutePath } from "7shared/config/routesConfig/routesConfig";
import { useSelector } from "react-redux";
import { getArticleDetailsData } from "6entities/Article";

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo(
  (props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);


    const navigate = useNavigate();
    const onBackToList = useCallback(() => {
      navigate(RoutePath.articles);
    }, [navigate]);


    return (
      <Page
        className={classNames(s.articleEditPage, {}, [
          className,
        ])}
      >
        {isEdit ? (
          <div>ArticleEditPage</div>
        ) : (
          <div>ArticleCreatedPage</div>
        )}
      </Page>
    );
  }
);
export default ArticleEditPage;
