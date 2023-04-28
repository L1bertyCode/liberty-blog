import { memo, useEffect } from "react";
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

import { classNames } from "7shared/lib/classNames/classNames";
import s from "./ArticleDetails.module.scss";

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
    const Data = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
      content = <div className={s.loading}>Loading...</div>;
    } else if (error) {
      content = <div className={s.error}>Error</div>;
    } else content = <div>ArticleDetails</div>;

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
