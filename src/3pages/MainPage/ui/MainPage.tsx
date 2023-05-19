import { useState } from "react";
import { useTranslation } from "react-i18next";

import s from "./MainPage.module.scss";
import { Page } from "4widgets/Page/Page";
import { Dropdown } from "7shared/ui/Dropdown/Dropdown";

const MainPage = () => {
  const { t } = useTranslation();

  return <Page>MainPage</Page>;
};

export default MainPage;
