import { StateSchema } from "1app/porviders/StoreProvider";
import { Article, ArticleView } from "6entities/Article";
import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { ArticlesPageSchema } from "../types/articlesPageSchema";
import { fetchArticleList } from "../services/fetchArticleList/fetchArticleList";
import { ARTCILE_VIEW_LOCALSTORAGE_KEY } from "7shared/const/localstorage";

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
    setView: (
      state,
      action: PayloadAction<ArticleView>
    ) => {
      state.view = action.payload;
      localStorage.setItem(
        ARTCILE_VIEW_LOCALSTORAGE_KEY,
        action.payload
      );
    },
    initState: (state) => {
      state.view = localStorage.getItem(
        ARTCILE_VIEW_LOCALSTORAGE_KEY
      ) as ArticleView;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticleList.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;
          articlesAdapter.setAll(state, action.payload);
        }
      )
      .addCase(
        fetchArticleList.rejected,
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const {
  reducer: articlesPageReducer,
  actions: articlesPageActions,
} = articlesPageSlice;
