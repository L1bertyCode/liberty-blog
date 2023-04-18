import { lazy } from "react";

export const ProfilePageAsync = lazy(
  () =>
    new Promise((res) => {
      //@ts-expect-errorts-ignore
      setTimeout(() => res(import("./ProfilePage")), 1500);
    })
);
