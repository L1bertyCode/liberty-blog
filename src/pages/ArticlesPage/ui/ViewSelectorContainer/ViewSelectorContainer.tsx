import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { getArticlesPageView } from "../../model/selectors/articlePageSelectors";
import { ArticleView } from "@/entities/Article";
import { articlesPageActions } from "../../model/slices/articlesPageSlice";
import { ArticleViewSelector } from "@/features/ArticleViewSelector";

import s from "./ViewSelectorContainer.module.scss";
import { useArticleFilters } from "../../lib/hooks/useArticleFilters";

interface ViewSelectorContainerProps {
  className?: string;
}

const ViewSelectorContainer = memo((props: ViewSelectorContainerProps) => {
  const { className } = props;
  const { view, onChangeView } = useArticleFilters();

  return (
    <div className={classNames(s.viewSelectorContainer, {}, [className])}>
      <ArticleViewSelector
        className={className}
        view={view}
        onViewClick={onChangeView}
      />
    </div>
  );
});
export default ViewSelectorContainer;
