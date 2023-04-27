import { useState } from "react";
import { useTranslation } from "react-i18next";

import s from "./MainPage.module.scss";

const MainPage = () => {
  const { t } = useTranslation();

  return <div>{t("Main")}</div>;
};

export default MainPage;
