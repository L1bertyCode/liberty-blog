import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./ArticleDetails.module.scss";

interface ArticleDetailsProps {
  className?: string;
}

export const ArticleDetails = memo(
  (props: ArticleDetailsProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
      <div
        className={classNames(s.articleDetails, {}, [
          className,
        ])}
      >
        <div>ArticleDetails</div>
      </div>
    );
  }
);
