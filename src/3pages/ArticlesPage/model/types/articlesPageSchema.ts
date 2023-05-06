import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "6entities/Article";

export interface ArticlesPageSchema
  extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  view: ArticleView;
}
