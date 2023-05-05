import { memo } from "react";
import { useTranslation } from "react-i18next";

import {
  Article,
  ArticleView,
} from "../../model/types/article";

import { classNames } from "7shared/lib/classNames/classNames";

import EyeIcon from "7shared/assets/icons/eye-20-20.svg";

import s from "./ArticleListItem.module.scss";
import { AppText } from "7shared/ui/AppText/AppText";
import {
  AppIcon,
  AppIconVarint,
} from "7shared/ui/AppIcon/AppIcon";
import { Card } from "7shared/ui/Card/Card";

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
      view = ArticleView.SMALL,
    } = props;

    const { t } = useTranslation();
    if (view === ArticleView.BIG) {
      return (
        <div
          className={classNames(s.articleListItem, {}, [
            className,
            s[view],
          ])}
        >
          <div>{article?.title}</div>
        </div>
      );
    }
    return (
      <div
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
            <AppText
              text={article?.type.join(", ")}
              className={s.types}
            />
            <AppText
              text={String(article?.views)}
              className={s.views}
            />
            <AppIcon
              Svg={EyeIcon}
              variant={AppIconVarint.PRIMARY}
            />
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
