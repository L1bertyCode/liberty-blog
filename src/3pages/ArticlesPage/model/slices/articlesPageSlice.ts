import { StateSchema } from "1app/porviders/StoreProvider";
import { Article, ArticleView } from "6entities/Article";
import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { ArticlesPageSchema } from "../types/articlesPageSchema";
import { stat } from "fs";

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles =
  articlesAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articlesPage ||
      articlesAdapter.getInitialState()
  );

const articlesPageSlice = createSlice({
  name: "articlesPageSlice",
  initialState:
    articlesAdapter.getInitialState<ArticlesPageSchema>({
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {},
      view: ArticleView.SMALL,
    }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
    },
  },
});

export const {
  reducer: articlesPageReducer,
  actions: articlesPageActions,
} = articlesPageSlice;
