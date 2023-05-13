import { getArticleDetailsData } from "6entities/Article";
import { getUserAuthData } from "6entities/User";
import { createSelector } from "@reduxjs/toolkit";

export const getCanEditArticle = createSelector(
  getArticleDetailsData,
  getUserAuthData,
  (article, user) => {
    if (!article || !user) {
      return false;
    }

    return article?.user?.id === user?.id;
  }
);
