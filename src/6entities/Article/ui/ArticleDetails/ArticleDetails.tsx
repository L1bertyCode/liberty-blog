import { memo, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { ArticleDetailsReducer } from "../../../Article/model/slices/ArticleDetailsSlice";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "6entities/Article/model/selectors/ArticleDetails";

import {
  DynamicModuleLoader,
  ReducersList,
} from "7shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { useAppDispatch } from "7shared/lib/hooks/useAppDispatch";

import EyeIcon from "7shared/assets/icons/eye-20-20.svg";
import CalendarIcon from "7shared/assets/icons/calendar-20-20.svg";

import { classNames } from "7shared/lib/classNames/classNames";
import s from "./ArticleDetails.module.scss";
import {
  AppText,
  AppTextAlign,
  AppTextSize,
} from "7shared/ui/AppText/AppText";
import { Skeleton } from "7shared/ui/Skeleton/Skeleton";
import { Avatar } from "7shared/ui/Avatar/Avatar";
import { AppIcon } from "7shared/ui/AppIcon/AppIcon";
import {
  ArticleBlock,
  ArticleBlockType,
} from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

interface ArticleDetailsProps {
  id: string;
  className?: string;
}

const reducers: ReducersList = {
  articleDetails: ArticleDetailsReducer,
};
export const ArticleDetails = memo(
  (props: ArticleDetailsProps) => {
    const { id, className } = props;
    const { t } = useTranslation();

    const isLoading = useSelector(
      getArticleDetailsIsLoading
    );
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBloack = useCallback(
      (block: ArticleBlock) => {
        switch (block.type) {
          case ArticleBlockType.CODE:
            return (
              <ArticleCodeBlockComponent
                className={s.block}
                block={block}
              />
            );
          case ArticleBlockType.IMAGE:
            return (
              <ArticleImageBlockComponent
                className={s.block}
                block={block}

              />
            );
          case ArticleBlockType.TEXT:
            return (
              <ArticleTextBlockComponent
                className={s.block}
                block={block}
              />
            );
          default:
            return null;
        }
      },
      []
    );

    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
      content = (
        <div>
          <Skeleton
            className={s.avatar}
            width={"200px"}
            height={"200px"}
            border={"50%"}
          />
          <Skeleton
            className={s.title}
            width={"300px"}
            height={"24px"}
          />
          <Skeleton
            className={s.skeleton}
            width={"600px"}
            height={"24px"}
          />
          <Skeleton
            className={s.skeleton}
            width={"100%"}
            height={"200px"}
          />
          <Skeleton
            className={s.skeleton}
            width={"100%"}
            height={"200px"}
          />
        </div>
      );
    } else if (error) {
      content = (
        <AppText
          title={t(
            "An error occurred while loading the page"
          )}
          align={AppTextAlign.CENTER}
          className={s.error}
        />
      );
    } else
      content = (
        <>
          <div className={s.avatarWrapper}>
            <Avatar
              alt="avatar"
              size={200}
              src={article?.img}
              className={s.avatar}
            />
          </div>

          <AppText
            className={s.title}
            title={article?.title}
            text={article?.subtitle}
            size={AppTextSize.L}
          />
          <div className={s.articleInfo}>
            <AppIcon className={s.icon} Svg={EyeIcon} />
            <AppText text={String(article?.views)} />
          </div>

          <div className={s.articleInfo}>
            <AppIcon
              className={s.icon}
              Svg={CalendarIcon}
            />
            <AppText text={article?.createdAt} />
          </div>
          {article?.blocks.map(renderBloack)}
        </>
      );

    return (
      <DynamicModuleLoader
        reducers={reducers}
        removeAfterUnmount
      >
        <div
          className={classNames(s.articleDetails, {}, [
            className,
          ])}
        >
          {content}
        </div>
      </DynamicModuleLoader>
    );
  }
);
