import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import { AppText } from "@/shared/ui/deprecated/AppText";

import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { AppIcon, AppIconVarint } from "@/shared/ui/deprecated/AppIcon";

import EyeIcon from "@/shared/assets/icons/eye-20-20.svg";
import { Card } from "@/shared/ui/deprecated/Card";
import { Avatar } from "@/shared/ui/deprecated/Avatar";

import { AppButton, AppButtonVariant } from "@/shared/ui/deprecated/AppButton";
import { Skeleton } from "@/shared/ui/deprecated/Skeleton";

import s from "./ArticleListItem.module.scss";
import {
  Article,
  ArticleTextBlock,
} from "@/entities/Article/model/types/article";
import {
  ArticleBlockType,
  ArticleView,
} from "@/entities/Article/model/consts/consts";

interface ArticleListItemSkeletonProps {
  className?: string;
  article?: Article;
  view?: ArticleView;
  isLoading?: boolean;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, article, view = ArticleView.SMALL } = props;
    const { t } = useTranslation();

    const views = (
      <>
        <AppText
          text={String(article?.views)}
          className={s.views}
        />
        <AppIcon
          Svg={EyeIcon}
          variant={AppIconVarint.PRIMARY}
        />
      </>
    );

    if (view === ArticleView.BIG) {
      const textBlock = article?.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT,
      ) as ArticleTextBlock;
      return (
        <div
          className={classNames(s.articleListItem, {}, [className, s[view]])}>
          <Card>
            <div className={s.header}>
              <Skeleton
                border={"50%"}
                width={"30px"}
                height={"30px"}
              />
              <Skeleton
                className={s.username}
                width={"150px"}
                height={"16px"}
              />
              <Skeleton
                width={"150px"}
                height={"16px"}
                className={s.date}
              />
            </div>
            <Skeleton
              className={s.title}
              width={"250px"}
              height={"24px"}
            />

            <Skeleton
              width={"100%"}
              height={"200px"}
              className={s.img}
            />
            {/* {textBlock && (
              <Skeleton className={s.textBlock} />
            )} */}
            <div className={s.footer}>
              <Skeleton
                width={"200px"}
                height={"36px"}
              />
            </div>
          </Card>
        </div>
      );
    }
    return (
      <div className={classNames(s.articleListItem, {}, [className, s[view]])}>
        <Card className={s.card}>
          <div className={s.imageWrapper}>
            <Skeleton
              width={"200px"}
              height={"200px"}
              className={s.img}
            />
          </div>

          <div className={s.infoWrapper}>
            <Skeleton
              width={"115px"}
              height={"16px"}
              className={s.types}
            />
          </div>
          <Skeleton
            width={"150px"}
            height={"16px"}
            className={s.title}
          />
        </Card>
      </div>
    );
  },
);
