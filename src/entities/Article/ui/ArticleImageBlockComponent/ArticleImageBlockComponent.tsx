import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticleImageBlockComponent.module.scss";
import { ArticleImageBlock } from "../../model/types/article";
import {
  AppText,
  AppTextAlign,
} from "@/shared/ui/AppText/AppText";

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
        <img
          src={block.src}
          alt={block.title}
          className={s.img}
        />
        {block.title && (
          <AppText
            text={block.title}
            align={AppTextAlign.CENTER}
          />
        )}
      </div>
    );
  }
);
