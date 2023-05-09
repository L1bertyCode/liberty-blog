import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./NotFoundPage.module.scss";
import { Page } from "4widgets/Page/Page";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo(
  (props: NotFoundPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
      <Page
        className={classNames(s.notFoundPage, {}, [
          className,
        ])}
      >
        <div>{t("Not Found Page")}</div>
      </Page>
    );
  }
);
