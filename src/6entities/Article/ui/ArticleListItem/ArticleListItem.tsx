import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from "../../model/types/article";

import { classNames } from "7shared/lib/classNames/classNames";

import EyeIcon from "7shared/assets/icons/eye-20-20.svg";

import { AppText } from "7shared/ui/AppText/AppText";
import {
  AppIcon,
  AppIconVarint,
} from "7shared/ui/AppIcon/AppIcon";
import { Card } from "7shared/ui/Card/Card";
import { useHover } from "7shared/lib/hooks/useHover";
import { Avatar } from "7shared/ui/Avatar/Avatar";
import {
  AppButton,
  AppButtonVariant,
} from "7shared/ui/AppButton/AppButton";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "7shared/config/routesConfig/routesConfig";

import s from "./ArticleListItem.module.scss";

interface ArticleListItemProps {
  className?: string;
  article?: Article;
  view?: ArticleView;
  isLoading?: boolean;
}

export const ArticleListItem = memo(
  (props: ArticleListItemProps) => {
    const {
      className,
      article,
      isLoading,
      view = ArticleView.SMALL,
    } = props;
    const { t } = useTranslation();
    const [isHover, bindHover] = useHover();
    // console.log(isHover);
    const navigate = useNavigate();
    const onOpenArticle = useCallback(() => {
      navigate(RoutePath.article_details + article?.id);
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
        (block) => block.type === ArticleBlockType.TEXT
      ) as ArticleTextBlock;
      return (
        <div
          className={classNames(s.articleListItem, {}, [
            className,
            s[view],
          ])}
        >
          <Card>
            <div className={s.header}>
              {/* <Avatar
                size={30}
                src={article.user.avatar}
              />
              <AppText
                text={article?.user.username}
                className={s.username}
              /> */}
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
            <img
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
              <AppButton
                onClick={onOpenArticle}
                variant={AppButtonVariant.OUTLINE}
              >
                {t("Read more...")}
              </AppButton>
              {views}
            </div>
          </Card>
        </div>
      );
    }
    return (
      <div
        {...bindHover}
        className={classNames(s.articleListItem, {}, [
          className,
          s[view],
        ])}
      >
        <Card onClick={onOpenArticle} className={s.card}>
          <div className={s.imageWrapper}>
            <img
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
      </div>
    );
  }
);
