import { useTranslation } from "react-i18next";

import s from "./MainPage.module.scss";
import { Page } from "@/widgets/Page/Page";
import { Counter } from "@/entities/Counter";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page data-testid={"MainPage"}>
      <p>MainPage</p>
      <Counter />
    </Page>
  );
};

export default MainPage;
