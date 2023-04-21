import { ReducStoreWIthManager } from "1app/porviders/StoreProvider";
import { StateSchemaKey } from "1app/porviders/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";
import { ReactNode, useEffect } from "react";
import { useStore } from "react-redux";
import { useAppDispatch } from "7shared/lib/hooks/useAppDispatch";
export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

// type ReducerListEntry = [StateSchemaKey, Reducer];
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
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(
        name as StateSchemaKey,
        reducer
      );
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(
          ([name, reducer]) => {
            store.reducerManager.remove(
              name as StateSchemaKey
            );
            dispatch({ type: `@DESTROY ${name} reducer` });
          }
        );
      }
    };
    // eslint-disable-next-line
  }, []);

  return <>{children}</>;
};
