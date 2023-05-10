import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "6entities/Article";
import { SortOrder } from "7shared/types";
import { ArticlesSortField } from "6entities/Article/model/types/article";

export interface ArticlesPageSchema
  extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  //pagination
  page: number;
  limit: number;
  hasMore: boolean;

  //filter
  view: ArticleView;
  order: SortOrder;
  sort: ArticlesSortField;
  search: string;

  _inited: boolean;
}
