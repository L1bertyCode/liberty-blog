import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./ArticleDetailsPage.module.scss";
import { ArticleDetails } from "6entities/Article/ui/ArticleDetails/ArticleDetails";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(
  (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
      <div
        className={classNames(s.articleDetailsPage, {}, [
          className,
        ])}
      >
        <ArticleDetails />
      </div>
    );
  }
);
export default ArticleDetailsPage;
