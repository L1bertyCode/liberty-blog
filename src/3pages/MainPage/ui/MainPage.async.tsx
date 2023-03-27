import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((res) => {
      //@ts-expect-errorts-ignore
      setTimeout(() => res(import("./MainPage")), 1500);
    })
);
