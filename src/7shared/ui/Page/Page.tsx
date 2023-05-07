import { ReactNode, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./Page.module.scss";

interface PageProps {
  className?: string;
  children: ReactNode;
}

export const Page = memo((props: PageProps) => {
  const { className, children } = props;
  const { t } = useTranslation();
  return (
    <section
      className={classNames(s.page, {}, [className])}
    >
      {children}
    </section>
  );
});
