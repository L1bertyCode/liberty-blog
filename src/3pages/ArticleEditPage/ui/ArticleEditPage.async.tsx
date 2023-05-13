import { lazy } from "react";

export const ArticleEditPageAsync = lazy(
  () =>
    new Promise((res) => {
      //@ts-expect-errorts-ignore
      setTimeout(() => res(import("./ArticleEditPage")), 400);
    })
);
