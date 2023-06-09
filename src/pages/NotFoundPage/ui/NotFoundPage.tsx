import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./NotFoundPage.module.scss";
import { Page } from "@/widgets/Page/Page";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo((props: NotFoundPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <Page
      data-testid={"NotFoundPage"}
      className={classNames(s.notFoundPage, {}, [className])}>
      <div>{t("Not Found Page")}</div>
    </Page>
  );
});
