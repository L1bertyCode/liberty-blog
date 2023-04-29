import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./ArticleImageBlockComponent.module.scss";
import { ArticleImageBlock } from "../../model/types/article";

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  (props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;
    const { t } = useTranslation();
    return (
      <div
        className={classNames(
          s.articleImageBlockComponent,
          {},
          [className]
        )}
      >
        <img src={block.src} alt={block.title} />
      </div>
    );
  }
);
