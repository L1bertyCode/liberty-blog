import { memo, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "@/entities/Article/model/selectors/ArticleDetails";

import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

import EyeIcon from "@/shared/assets/icons/eye-20-20.svg";
import CalendarIcon from "@/shared/assets/icons/calendar-20-20.svg";

import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./ArticleDetails.module.scss";
import {
  AppText,
  AppTextAlign,
  AppTextSize,
} from "@/shared/ui/AppText";
import { Skeleton } from "@/shared/ui/Skeleton";
import { Avatar } from "@/shared/ui/Avatar";
import { AppIcon } from "@/shared/ui/AppIcon";
import { ArticleBlock } from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { articleDetailsReducer } from "@/entities/Article/model/slices/ArticleDetailsSlice";
import { HStack, VStack } from "@/shared/ui/Stack";
import { ArticleBlockType } from "@/entities/Article/model/consts/consts";

interface ArticleDetailsProps {
  id?: string;
  className?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
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
                key={block.id}
              />
            );
          case ArticleBlockType.IMAGE:
            return (
              <ArticleImageBlockComponent
                className={s.block}
                block={block}
                key={block.id}
              />
            );
          case ArticleBlockType.TEXT:
            return (
              <ArticleTextBlockComponent
                className={s.block}
                block={block}
                key={block.id}
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
      if (__PROJECT__ !== "storybook") {
        dispatch(fetchArticleById(id));
      }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
      content = (
        <VStack gap="16" fullWidth>
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
        </VStack>
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
          <HStack justify="center" fullWidth>
            <Avatar
              alt="avatar"
              size={200}
              src={article?.img}
              className={s.avatar}
            />
          </HStack>
          <VStack data-testid={"ArticleDetails.Content"} gap="8" fullWidth>
            <AppText
              className={s.title}
              title={article?.title}
              text={article?.subtitle}
              size={AppTextSize.L}
            />
            <HStack gap={"8"}>
              <AppIcon className={s.icon} Svg={EyeIcon} />
              <AppText text={String(article?.views)} />
            </HStack>

            <HStack gap={"8"}>
              <AppIcon
                className={s.icon}
                Svg={CalendarIcon}
              />
              <AppText text={article?.createdAt} />
            </HStack>
          </VStack>
          {article?.blocks.map(renderBloack)}
        </>
      );

    return (
      <DynamicModuleLoader
        reducers={reducers}
        removeAfterUnmount
      >
        <VStack
          gap="16"
          fullWidth
          className={classNames(s.articleDetails, {}, [
            className,
          ])}
        >
          {content}
        </VStack>
      </DynamicModuleLoader>
    );
  }
);
