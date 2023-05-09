import { memo } from "react";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./PageLoader.module.scss";
import { Loader } from "7shared/ui/Loader/Loader";
import { Page } from "4widgets/Page/Page";

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
