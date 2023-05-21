import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import s from "./PageLoader.module.scss";
import { Loader } from "shared/ui/Loader/Loader";
import { Page } from "widgets/Page/Page";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = memo((props: PageLoaderProps) => {
  const { className } = props;
  return (
    <Page
      className={classNames(s.pageLoader, {}, [className])}
    >
      <Loader />
    </Page>
  );
});
