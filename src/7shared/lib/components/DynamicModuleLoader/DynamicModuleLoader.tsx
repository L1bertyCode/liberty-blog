import {
  ReducStoreWIthManager,
  useAppDispatch,
} from "1app/porviders/StoreProvider";
import { StateSchemaKey } from "1app/porviders/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";
import { ReactNode, useEffect } from "react";
import { useStore } from "react-redux";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducerListEntry = [StateSchemaKey, Reducer];
interface DynamicModuleLoaderProps {
  children: ReactNode;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (
  props: DynamicModuleLoaderProps
) => {
  const { children, reducers, removeAfterUnmount } = props;
  const store = useStore() as ReducStoreWIthManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(
      ([name, reducer]: ReducerListEntry) => {
        store.reducerManager.add(name, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    );

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(
          ([name, reducer]: ReducerListEntry) => {
            store.reducerManager.remove(name, reducer);
            dispatch({ type: `@DESTROY ${name} reducer` });
          }
        );
      }
    };
    // eslint-disable-next-line
  }, []);

  return <>{children}</>;
};
