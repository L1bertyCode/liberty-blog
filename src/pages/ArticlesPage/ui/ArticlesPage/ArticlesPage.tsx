import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticlesPage.module.scss";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articlesPageReducer } from "@/pages/ArticlesPage/model/slices/articlesPageSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect";

import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";

import { Page } from "@/widgets/Page/Page";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";
import { useSearchParams } from "react-router-dom";
import { initArticlesPage } from "../../model/services/initeArticlesPage/initArticlesPage";
import ArticleInfiniteList from "../ArticleInfiniteList/ArticleInfiniteList";
import { VStack } from "@/shared/ui/deprecated/Stack";
import { useArticleItemById } from "../../model/selectors/articlePageSelectors";
import { ArticlePageGreeting } from "@/features/ArticlePageGreeting";

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = memo((props: ArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);
  const data = useArticleItemById("2");
  console.log("data", data);

  let [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });
  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount={false}>
      <Page
        data-testid={"ArticlesPage"}
        onScrollEnd={onLoadNextPart}
        className={classNames(s.ArticlesPage, {}, [className])}>
        <VStack gap="16">
          <ArticlesPageFilters />
          <ArticleInfiniteList />
          <ArticlePageGreeting/>
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
});
export default ArticlesPage;
