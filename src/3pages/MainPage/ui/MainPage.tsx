import { useState } from "react";
import { useTranslation } from "react-i18next";

import s from "./MainPage.module.scss";
import { Page } from "7shared/ui/Page/Page";

const MainPage = () => {
  const { t } = useTranslation();

  return <Page>{t("Main")}</Page>;
};

export default MainPage;
