import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticleTextBlockComponent.module.scss";
import { ArticleTextBlock } from "../../model/types/article";
import { AppText } from "@/shared/ui/AppText";

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;
    const { t } = useTranslation();
    return (
      <div
        className={classNames(
          s.articleTextBlockComponent,
          {},
          [className]
        )}
      >
        {block.title && (
          <AppText
            title={block.title}
            className={s.title}
          />
        )}
        {block.paragraphs.map((paragraph) => {
          return (
            <AppText
              key={paragraph}
              text={paragraph}
              className={s.paragraph}
            />
          );
        })}
      </div>
    );
  }
);
