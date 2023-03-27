import { lazy } from "react";

export const AboutPageAsync = lazy(
  () =>
    new Promise((res) => {
      //@ts-expect-errorts-ignore
      setTimeout(() => res(import("./AboutPage")), 1500);
    })
);
