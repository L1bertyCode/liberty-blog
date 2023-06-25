import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";

import EyeIcon from "@/shared/assets/icons/eye-20-20.svg";

import { AppText } from "@/shared/ui/deprecated/AppText";
import { AppIcon, AppIconVarint } from "@/shared/ui/deprecated/AppIcon";
import { Card } from "@/shared/ui/deprecated/Card";
import { useHover } from "@/shared/lib/hooks/useHover";
import { Avatar } from "@/shared/ui/deprecated/Avatar";
import { AppButton, AppButtonVariant } from "@/shared/ui/deprecated/AppButton";
import { ArticleTextBlockComponent } from "../../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { useNavigate } from "react-router-dom";

import s from "./ArticleListItemDeprecated.module.scss";
import { AppLink } from "@/shared/ui/deprecated/AppLink";
import {
  ArticleBlockType,
  ArticleView,
} from "@/entities/Article/model/consts/consts";
import { getRouteArticleDetails } from "@/shared/const/router";
import { AppImage } from "@/shared/ui/redesigned/AppImage";
import { Skeleton } from "@/shared/ui/deprecated/Skeleton";

import { ArticleListItemProps } from "../ArticleListItem";
import { ArticleTextBlock } from "../../../../Article/model/types/article";
export const ArticleListItemDeprecated = memo((props: ArticleListItemProps) => {
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
      <Card
        data-testid={"ArticleListItem"}
        className={classNames(s.articleListItem, {}, [className, s[view]])}>
        <div className={s.header}>
          <Avatar
            size={30}
            src={article?.user.avatar}
          />
          <AppText
            text={article?.user.username}
            className={s.username}
          />
          <AppText
            text={article?.createdAt}
            className={s.date}
          />
        </div>
        <AppText
          title={article?.title}
          className={s.title}
        />
        {types}
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
        {textBlock && (
          <ArticleTextBlockComponent
            block={textBlock}
            className={s.textBlock}
          />
        )}
        <div className={s.footer}>
          <AppLink
            target={target}
            to={getRouteArticleDetails(article.id)}>
            <AppButton
              onClick={onOpenArticle}
              variant={AppButtonVariant.OUTLINE}>
              {t("Read more...")}
            </AppButton>
          </AppLink>
          {views}
        </div>
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
