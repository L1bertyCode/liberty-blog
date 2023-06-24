import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";

import EyeIcon from "@/shared/assets/icons/eye.svg";

import { AppText } from "@/shared/ui/redesigned/AppText";
import { AppIcon } from "@/shared/ui/redesigned/AppIcon";
import { Card } from "@/shared/ui/redesigned/Card";
import { useHover } from "@/shared/lib/hooks/useHover";
import { Avatar } from "@/shared/ui/redesigned/Avatar";
import { AppButton } from "@/shared/ui/redesigned/AppButton";

import { useNavigate } from "react-router-dom";

import s from "./ArticleListItemRedesigned.module.scss";
import { AppLink } from "@/shared/ui/redesigned/AppLink";
import {
  ArticleBlockType,
  ArticleView,
} from "@/entities/Article/model/consts/consts";
import { getRouteArticleDetails } from "@/shared/const/router";
import { AppImage } from "@/shared/ui/redesigned/AppImage";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";

import { ArticleListItemProps } from "../ArticleListItem";
import { ArticleTextBlock } from "../../../../Article/model/types/article";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
  const {
    className,
    article,
    isLoading,
    view = ArticleView.SMALL,
    target,
  } = props;
  const { t } = useTranslation();
  const [isHover, bindHover] = useHover();
  // console.log(isHover);
  const navigate = useNavigate();
  const onOpenArticle = useCallback(() => {
    navigate(getRouteArticleDetails(article.id));
  }, [article?.id, navigate]);

  const types = (
    <AppText
      text={article?.type.join(", ")}
      className={s.types}
    />
  );

  const views = (
    <HStack gap="8">
      <AppIcon Svg={EyeIcon} />

      <AppText
        text={String(article?.views)}
        className={s.views}
      />
    </HStack>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article?.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;
    return (
      <Card
        padding="24"
        fullWidth
        data-testid={"ArticleListItem"}
        className={classNames(s.articleListItem, {}, [className, s[view]])}>
        <VStack
          className={s.header}
          fullWidth
          gap="16">
          <HStack gap="8">
            <Avatar
              size={32}
              src={article?.user.avatar}
            />
            <AppText
              bold
              text={article?.user.username}
              className={s.username}
            />
            <AppText
              text={article?.createdAt}
              className={s.date}
            />
          </HStack>
          <AppText
            bold
            title={article?.title}
          />
          <AppText
            bold
            title={article?.subtitle}
            size="s"
          />
          <AppImage
            fallback={
              <Skeleton
                width={"100%"}
                height={"250px"}
              />
            }
            src={article?.img}
            alt={article?.title}
            className={s.img}
          />
          {textBlock?.paragraphs && (
            <AppText
              text={textBlock.paragraphs.slice(0, 2).join(" ")}
              className={s.textBlock}
            />
          )}
          <HStack
            fullWidth
            justify="between">
            <AppLink
              target={target}
              to={getRouteArticleDetails(article.id)}>
              <AppButton
                onClick={onOpenArticle}
                variant={"outline"}>
                {t("Read more...")}
              </AppButton>
            </AppLink>
            {views}
          </HStack>
        </VStack>

        {/* {types} */}

        <div className={s.footer}></div>
      </Card>
    );
  }
  return (
    <AppLink
      data-testid={"ArticleListItem"}
      target={target}
      to={getRouteArticleDetails(article.id)}
      {...bindHover}
      className={classNames(s.articleListItem, {}, [className, s[view]])}>
      <Card className={s.card}>
        <div className={s.imageWrapper}>
          <AppImage
            fallback={
              <Skeleton
                width={"200px"}
                height={"200px"}
              />
            }
            src={article?.img}
            alt={article?.title}
            className={s.img}
          />
          <AppText
            text={article?.createdAt}
            className={s.date}
          />
        </div>

        <div className={s.infoWrapper}>
          {types}
          {views}
        </div>

        <AppText
          text={String(article?.title)}
          className={s.title}
        />
      </Card>
    </AppLink>
  );
});
