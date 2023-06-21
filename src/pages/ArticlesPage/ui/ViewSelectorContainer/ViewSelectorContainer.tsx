import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { getArticlesPageView } from "../../model/selectors/articlePageSelectors";
import { ArticleView } from "@/entities/Article";
import { articlesPageActions } from "../../model/slices/articlesPageSlice";
import { ArticleViewSelector } from "@/features/ArticleViewSelector";

import s from "./ViewSelectorContainer.module.scss";

interface ViewSelectorContainerProps {
  className?: string;
}

const ViewSelectorContainer = memo((props: ViewSelectorContainerProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch],
  );

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
