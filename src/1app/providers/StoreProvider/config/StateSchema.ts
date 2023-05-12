import { To } from "react-router-dom";

import { CounterSchema } from "6entities/Counter";
import { UserSchema } from "6entities/User";
import { LoginSchema } from "5features/AuthByUsername";
import {
  AnyAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { CombinedState } from "redux";
import { ProfileSchema } from "6entities/Profile";
import { AxiosInstance } from "axios";
import { NavigateOptions } from "react-router";
import { ArticleDetailsSchema } from "6entities/Article";

import { AddCommentFormSchema } from "5features/addCommentForm";
import { ArticlesPageSchema } from "3pages/ArticlesPage";
import { ScrollSaveSchema } from "5features/ScrollSave";
import { ArticleDetailsCommentsSchema, ArticleDetailsRecommendationsSchema } from "3pages/ArticleDetailsPage";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  scrollSave: ScrollSaveSchema;

  // Асинхронные редюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  articleDetailsRecomendations?: ArticleDetailsRecommendationsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<
  StateSchemaKey,
  boolean
>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (
    state: StateSchema,
    action: AnyAction
  ) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  //true-mounted, false-was not mounted| dismantled
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager
  extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
