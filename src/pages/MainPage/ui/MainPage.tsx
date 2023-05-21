import { useState } from "react";
import { useTranslation } from "react-i18next";

import s from "./MainPage.module.scss";
import { Page } from "widgets/Page/Page";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";

const MainPage = () => {
  const { t } = useTranslation();

  return <Page>MainPage</Page>;
};

export default MainPage;
