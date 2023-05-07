import { lazy } from "react";

export const ArticleDetailsPageAsync = lazy(
  () =>
    new Promise((res) => {
      setTimeout(
        //@ts-expect-errorts-ignore
        () => res(import("./ArticleDetailsPage")),
        400
      );
    })
);
