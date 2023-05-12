import { Article } from "6entities/Article";
import { Comment } from "6entities/Comment";
import { EntityState } from "@reduxjs/toolkit";

export interface ArticleDetailsRecommendationsSchema
  extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
}
