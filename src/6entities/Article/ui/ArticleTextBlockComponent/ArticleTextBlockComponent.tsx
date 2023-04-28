import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./ArticleTextBlockComponent.module.scss";

interface ArticleTextBlockComponentProps {
  className?: string;
}

export const ArticleTextBlockComponent = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
      <div
        className={classNames(
          s.articleTextBlockComponent,
          {},
          [className]
        )}
      >
        <div>ArticleTextBlockComponent</div>
      </div>
    );
  }
);
