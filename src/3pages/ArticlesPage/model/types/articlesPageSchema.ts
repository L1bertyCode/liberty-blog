import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "6entities/Article";
import { SortOrder } from "7shared/types";
import {
  ArticleType,
  ArticlesSortField,
} from "6entities/Article";

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

  type: ArticleType;

  _inited: boolean;
}
