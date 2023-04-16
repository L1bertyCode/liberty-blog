import { LoginSchema } from "5features/AuthByUsername";
import { CounterSchema } from "6entities/Counter";
import { UserSchema } from "6entities/User";
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { NavigateOptions, To } from "react-router-dom";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  //Async reducers
  loginForm?: LoginSchema;
}
export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}
export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (
    state: StateSchema,
    action: AnyAction
  ) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey, reducer: Reducer) => void;
}
export type StateSchemaKey = keyof StateSchema;
export interface ReducStoreWIthManager
  extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
