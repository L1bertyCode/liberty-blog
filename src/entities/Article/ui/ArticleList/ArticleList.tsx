import {
  HTMLAttributeAnchorTarget,
  LegacyRef,
  memo,
} from "react";
import { useTranslation } from "react-i18next";

import {
  Article,
  ArticleView,
} from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

import { classNames } from "shared/lib/classNames/classNames";

import s from "./ArticleList.module.scss";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import {
  AppText,
  AppTextSize,
} from "shared/ui/AppText/AppText";
import {
  List,
  ListRowProps,
  WindowScroller,
} from "react-virtualized";
import { PAGE_ID } from "widgets/Page/Page";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  virtualized?: boolean;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton
        className={s.card}
        key={index}
        view={view}
      />
    ));

export const ArticleList = memo(
  (props: ArticleListProps) => {
    const {
      className,
      articles,
      view = ArticleView.SMALL,
      isLoading,
      target,
      virtualized = true,
    } = props;
    const { t } = useTranslation();

    const isBig = view === ArticleView.BIG;

    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig
      ? articles?.length
      : Math.ceil(articles.length / itemsPerRow);

    const rowRender = ({
      index,
      isScrolling,
      key,
      style,
    }: ListRowProps) => {
      const items = [];
      const fromIndex = index * itemsPerRow;
      const toIndex = Math.min(
        fromIndex + itemsPerRow,
        articles?.length
      );

      for (let i = fromIndex; i < toIndex; i += 1) {
        items.push(
          <ArticleListItem
            article={articles?.[i]}
            view={view}
            target={target}
            key={`str${i}`}
            className={s.card}
          />
        );
      }

      return (
        <div key={key} style={style} className={s.row}>
          {items}
        </div>
      );
    };

    if (!isLoading && !articles?.length) {
      return (
        <div
          className={classNames(s.ArticleList, {}, [
            className,
            s[view],
          ])}
        >
          <AppText
            size={AppTextSize.L}
            title={t("Статьи не найдены")}
          />
        </div>
      );
    }

    return (
      // @ts-ignore
      <WindowScroller
        scrollElement={
          document.getElementById(PAGE_ID) as Element
        }
      >
        {({
          height,
          width,
          registerChild,
          onChildScroll,
          isScrolling,
          scrollTop,
        }) => (
          <div
            ref={registerChild as LegacyRef<HTMLDivElement>}
            className={classNames(s.ArticleList, {}, [
              className,
              s[view],
            ])}
          >
            {virtualized ? (
              // @ts-ignore
              <List
                height={height ?? 700}
                rowCount={rowCount}
                rowHeight={isBig ? 700 : 330}
                rowRenderer={rowRender}
                width={width ? width - 80 : 700}
                autoHeight
                onScroll={onChildScroll}
                isScrolling={isScrolling}
                scrollTop={scrollTop}
              />
            ) : (
              articles.map((article) => (
                <ArticleListItem
                  article={article}
                  view={view}
                  target={target}
                  key={article.id}
                  className={s.card}
                />
              ))
            )}

            {isLoading && getSkeletons(view)}
          </div>
        )}
      </WindowScroller>
    );
  }
);
