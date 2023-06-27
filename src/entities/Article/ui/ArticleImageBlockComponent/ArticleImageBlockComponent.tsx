import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticleImageBlockComponent.module.scss";
import { ArticleImageBlock } from "../../model/types/article";
import {
  AppText as AppTextDeprecated,
  AppTextAlign as AppTextAlignDeprecated,
} from "@/shared/ui/deprecated/AppText";
import { ToggleFeatures } from "@/shared/lib/features";
import { AppText } from "@/shared/ui/redesigned/AppText";

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  (props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;
    const { t } = useTranslation();
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <div
            className={classNames(s.articleImageBlockComponent, {}, [
              className,
            ])}>
            <img
              src={block.src}
              alt={block.title}
              className={s.img}
            />
            {block.title && (
              <AppText
                text={block.title}
                align={"center"}
              />
            )}
          </div>
        }
        off={
          <div
            className={classNames(s.articleImageBlockComponent, {}, [
              className,
            ])}>
            <img
              src={block.src}
              alt={block.title}
              className={s.img}
            />
            {block.title && (
              <AppTextDeprecated
                text={block.title}
                align={AppTextAlignDeprecated.CENTER}
              />
            )}
          </div>
        }
      />
    );
  },
);
