import { useState } from "react";
import { useTranslation } from "react-i18next";

import s from "./MainPage.module.scss";
import { Page } from "4widgets/Page/Page";
import { MyHListbox } from "7shared/ui/HListBox/ListBox";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <MyHListbox
        defaultValue="Select value"
        onChange={() => console.log("123")}
        value={undefined}
        items={[
          { value: "123", content: "asd" },
          {
            value: "1234",
            content: "asdf",
            disabled: true,
          },
          { value: "1245", content: "asdfg" },
        ]}
      />
      <>{t("Main")}</>
    </Page>
  );
};

export default MainPage;
