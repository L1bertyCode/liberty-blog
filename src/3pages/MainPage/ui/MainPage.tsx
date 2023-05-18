import { useState } from "react";
import { useTranslation } from "react-i18next";

import s from "./MainPage.module.scss";
import { Page } from "4widgets/Page/Page";
import { MyHListbox } from "7shared/ui/HListBox/ListBox";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <MyHListbox />
      <>{t("Main")}</>
    </Page>
  );
};

export default MainPage;
