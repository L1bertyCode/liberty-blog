import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";

import EyeIcon from "@/shared/assets/icons/eye.svg";

import { AppText } from "@/shared/ui/redesigned/AppText";
import { AppIcon } from "@/shared/ui/redesigned/AppIcon";
import { Card } from "@/shared/ui/redesigned/Card";

import { Avatar } from "@/shared/ui/redesigned/Avatar";
import { AppButton } from "@/shared/ui/redesigned/AppButton";

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
  const { className, article, view = ArticleView.SMALL, target } = props;
  const { t } = useTranslation();

  const userInfo = (
    <>
      <Avatar
        size={32}
        src={article.user.avatar}
        className={s.avatar}
      />
      <AppText
        bold
        text={article.user.username}
      />
    </>
  );
  const views = (
    <HStack gap="8">
      <AppIcon Svg={EyeIcon} />
      <AppText
        text={String(article.views)}
        className={s.views}
      />
    </HStack>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <Card
        padding="24"
        fullWidth
        data-testid="ArticleListItem"
        className={classNames(s.articleListItemRedesigned, {}, [
          className,
          s[view],
        ])}>
        <VStack
          fullWidth
          gap="16">
          <HStack
            gap="8"
            fullWidth>
            {userInfo}
            <AppText text={article.createdAt} />
          </HStack>
          <AppText
            title={article.title}
            bold
          />
          <AppText
            title={article.subtitle}
            size="s"
          />
          <AppImage
            fallback={
              <Skeleton
                width="100%"
                height={"250px"}
              />
            }
            src={article.img}
            className={s.img}
            alt={article.title}
          />
          {textBlock?.paragraphs && (
            <AppText
              className={s.textBlock}
              text={textBlock.paragraphs.slice(0, 2).join(" ")}
            />
          )}
          <HStack
            fullWidth
            justify="between">
            <AppLink
              target={target}
              to={getRouteArticleDetails(article.id)}>
              <AppButton variant="outline">{t("Читать далее...")}</AppButton>
            </AppLink>
            {views}
          </HStack>
        </VStack>
      </Card>
    );
  }

  return (
    <AppLink
      data-testid="ArticleListItem"
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames(s.ArticleListItem, {}, [className, s[view]])}>
      <Card
        className={s.card}
        border="round"
        padding="0">
        <AppImage
          fallback={
            <Skeleton
              width={"100%"}
              height={200}
            />
          }
          alt={article.title}
          src={article.img}
          className={s.img}
        />
        <VStack
          className={s.info}
          gap="4">
          <AppText
            title={article.title}
            className={s.title}
          />
          <VStack
            gap="4"
            className={s.footer}
            fullWidth>
            <HStack
              justify="between"
              fullWidth>
              <AppText
                text={article.createdAt}
                className={s.date}
              />
              {views}
            </HStack>
            <HStack gap="4">{userInfo}</HStack>
          </VStack>
        </VStack>
      </Card>
    </AppLink>
  );
});
