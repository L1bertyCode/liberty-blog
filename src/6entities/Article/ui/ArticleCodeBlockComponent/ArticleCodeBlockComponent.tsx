import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./ArticleCodeBlockComponent.module.scss";

interface ArticleCodeBlockComponentProps {
  className?: string;
}

export const ArticleCodeBlockComponent = memo(
  (props: ArticleCodeBlockComponentProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
      <div
        className={classNames(
          s.articleCodeBlockComponent,
          {},
          [className]
        )}
      >
        <div>ArticleCodeBlockComponent</div>
      </div>
    );
  }
);
