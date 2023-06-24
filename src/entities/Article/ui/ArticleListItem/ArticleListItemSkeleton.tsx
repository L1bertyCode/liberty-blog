import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import { Card as CardDeprecated } from "@/shared/ui/deprecated/Card";
import { Card as CardRedesigned } from "@/shared/ui/redesigned/Card";

import { Skeleton as SkeletonDeprecated } from "@/shared/ui/deprecated/Skeleton";
import { Skeleton as SkeletonRedesigned } from "@/shared/ui/redesigned/Skeleton";

import s from "./ArticleListItem.module.scss";
import {
  Article,
  ArticleTextBlock,
} from "@/entities/Article/model/types/article";
import {
  ArticleBlockType,
  ArticleView,
} from "@/entities/Article/model/consts/consts";
import { toggleFeatures } from "@/shared/lib/features";

 interface ArticleListItemSkeletonProps {
  className?: string;
  article?: Article;
  view?: ArticleView;
  isLoading?: boolean;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, article, view = ArticleView.SMALL } = props;
    const Skeleton = toggleFeatures({
      name: "isAppRedesigned",
      on: () => SkeletonRedesigned,
      off: () => SkeletonDeprecated,
    });

    const Card = toggleFeatures({
      name: "isAppRedesigned",
      on: () => CardRedesigned,
      off: () => CardDeprecated,
    });
    if (view === ArticleView.BIG) {
      const textBlock = article?.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT,
      ) as ArticleTextBlock;
      return (
        <div
          className={classNames(s.articleListItem, {}, [className, s[view]])}>
          <Card fullWidth>
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
