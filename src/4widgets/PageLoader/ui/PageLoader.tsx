import { memo } from "react";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./PageLoader.module.scss";
import { Loader } from "7shared/ui/Loader/Loader";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = memo((props: PageLoaderProps) => {
  const { className } = props;
  return (
    <div className={classNames(s.pageLoader, {}, [className])}>
      <Loader />
    </div>
  );
});
