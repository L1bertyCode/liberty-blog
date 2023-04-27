import { lazy } from "react";

export const ArticlesPageAsync = lazy(
  () =>
    new Promise((res) => {
      //@ts-expect-errorts-ignore
      setTimeout(() => res(import("./ArticlesPage")), 1500);
    })
);
