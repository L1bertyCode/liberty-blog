import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./ArticleImageBlockComponent.module.scss";

interface ArticleImageBlockComponentProps {
  className?: string;
}

export const ArticleImageBlockComponent = memo(
  (props: ArticleImageBlockComponentProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
      <div
        className={classNames(
          s.articleImageBlockComponent,
          {},
          [className]
        )}
      >
        <div>ArticleImageBlockComponent</div>
      </div>
    );
  }
);
