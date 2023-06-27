import { memo, useEffect } from "react";
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
  AppText as AppTextDeprecated,
  AppTextAlign as AppTextAlignDeprecated,
  AppTextSize as AppTextSizeDeprecated,
} from "@/shared/ui/deprecated/AppText";
import { Skeleton as SkeletonDeprecated } from "@/shared/ui/deprecated/Skeleton";
import { Avatar as AvatarDeprecated } from "@/shared/ui/deprecated/Avatar";
import { AppIcon as AppIconDeprecated } from "@/shared/ui/deprecated/AppIcon";

import { articleDetailsReducer } from "@/entities/Article/model/slices/ArticleDetailsSlice";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";

import { renderArticleBlock } from "./renderArticleBlock";
import { ToggleFeatures } from "@/shared/lib/features";
import { AppText } from "@/shared/ui/redesigned/AppText";

import { AppImage } from "@/shared/ui/redesigned/AppImage";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";

interface ArticleDetailsProps {
  id?: string;
  className?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};
const Deprecated = () => {
  const article = useSelector(getArticleDetailsData);
  return (
    <>
      <HStack
        justify="center"
        fullWidth>
        <AvatarDeprecated
          alt="avatar"
          size={200}
          src={article?.img}
          className={s.avatar}
        />
      </HStack>
      <VStack
        data-testid={"ArticleDetails.Content"}
        gap="8"
        fullWidth>
        <AppTextDeprecated
          className={s.title}
          title={article?.title}
          text={article?.subtitle}
          size={AppTextSizeDeprecated.L}
        />
        <HStack gap={"8"}>
          <AppIconDeprecated
            className={s.icon}
            Svg={EyeIcon}
          />
          <AppText text={String(article?.views)} />
        </HStack>

        <HStack gap={"8"}>
          <AppIconDeprecated
            className={s.icon}
            Svg={CalendarIcon}
          />
          <AppText text={article?.createdAt} />
        </HStack>
      </VStack>
      {article?.blocks.map(renderArticleBlock)}
    </>
  );
};

const Redesigned = () => {
  const article = useSelector(getArticleDetailsData);
  return (
    <>
      <AppText
        title={article?.title}
        size={"l"}
        bold
      />
      <AppText
        text={article?.subtitle}
        size={"l"}
      />
      <AppImage
        fallback={
          <Skeleton
            width={"100%"}
            height={"420px"}
            border={"16px"}
          />
        }
        alt="avatar"
        src={article?.img}
      />

      {article?.blocks.map(renderArticleBlock)}
    </>
  );
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { id, className } = props;
  const { t } = useTranslation();

  const isLoading = useSelector(getArticleDetailsIsLoading);

  const error = useSelector(getArticleDetailsError);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <VStack
        gap="16"
        fullWidth>
        <SkeletonDeprecated
          className={s.avatar}
          width={"200px"}
          height={"200px"}
          border={"50%"}
        />
        <SkeletonDeprecated
          className={s.title}
          width={"300px"}
          height={"24px"}
        />
        <SkeletonDeprecated
          className={s.skeleton}
          width={"600px"}
          height={"24px"}
        />
        <SkeletonDeprecated
          className={s.skeleton}
          width={"100%"}
          height={"200px"}
        />
        <SkeletonDeprecated
          className={s.skeleton}
          width={"100%"}
          height={"200px"}
        />
      </VStack>
    );
  } else if (error) {
    content = (
      <AppText
        title={t("An error occurred while loading the page")}
        align={AppTextAlignDeprecated.CENTER}
        className={s.error}
      />
    );
  } else
    content = (
      <>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Redesigned />}
          off={<Deprecated />}
        />
      </>
    );

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount>
      <VStack
        gap="16"
        fullWidth
        className={classNames(s.articleDetails, {}, [className])}>
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
