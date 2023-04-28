import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./ArticleDetailsPage.module.scss";
import { ArticleDetails } from "6entities/Article/ui/ArticleDetails/ArticleDetails";
import { useParams } from "react-router-dom";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(
  (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    if (!id) {
      return (
        <div
          className={classNames(s.articleDetailsPage, {}, [
            className,
          ])}
        >
          {t("Article not found")}
        </div>
      );
    }
    return (
      <div
        className={classNames(s.articleDetailsPage, {}, [
          className,
        ])}
      >
        <ArticleDetails id={id} />
      </div>
    );
  }
);
export default ArticleDetailsPage;
