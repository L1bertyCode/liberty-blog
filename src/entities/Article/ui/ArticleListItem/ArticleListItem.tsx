import {
  HTMLAttributeAnchorTarget,
  memo,
  useCallback,
} from "react";
import { useTranslation } from "react-i18next";

import {
  Article,
  ArticleTextBlock,
} from "../../model/types/article";

import { classNames } from "shared/lib/classNames/classNames";

import EyeIcon from "shared/assets/icons/eye-20-20.svg";

import { AppText } from "shared/ui/AppText/AppText";
import {
  AppIcon,
  AppIconVarint,
} from "shared/ui/AppIcon/AppIcon";
import { Card } from "shared/ui/Card/Card";
import { useHover } from "shared/lib/hooks/useHover";
import { Avatar } from "shared/ui/Avatar/Avatar";
import {
  AppButton,
  AppButtonVariant,
} from "shared/ui/AppButton/AppButton";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routesConfig/routesConfig";

import s from "./ArticleListItem.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import {
  ArticleBlockType,
  ArticleView,
} from "entities/Article/model/consts/consts";

interface ArticleListItemProps {
  className?: string;
  article?: Article;
  view?: ArticleView;
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(
  (props: ArticleListItemProps) => {
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
              <AppLink
                target={target}
                to={RoutePath.article_details + article?.id}
              >
                <AppButton
                  onClick={onOpenArticle}
                  variant={AppButtonVariant.OUTLINE}
                >
                  {t("Read more...")}
                </AppButton>
              </AppLink>
              {views}
            </div>
          </Card>
        </div>
      );
    }
    return (
      <AppLink
        target={target}
        to={RoutePath.article_details + article?.id}
        {...bindHover}
        className={classNames(s.articleListItem, {}, [
          className,
          s[view],
        ])}
      >
        <Card className={s.card}>
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
      </AppLink>
    );
  }
);
