import { lazy } from "react";


export const AddCommentFormAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      setTimeout(
      //@ts-ignore
        () => resolve(import("./AddCommentForm")),
        1500
      );
    })
);
