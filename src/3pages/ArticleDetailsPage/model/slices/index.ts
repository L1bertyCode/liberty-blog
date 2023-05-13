import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailsPageSchema } from "../types";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";
import { articleDetailsRecommendationsReducer } from "./articleDetailsPageRecomendationsSlice";

export const articleDetailsPageReducer =
  combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recomendations: articleDetailsRecommendationsReducer,
  });
