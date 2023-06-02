import { useTranslation } from "react-i18next";

import s from "./MainPage.module.scss";
import { Page } from "@/widgets/Page/Page";
import { StarRating } from "@/shared/ui/StarRating/StarRating";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      MainPage
      <StarRating size={50} />
    </Page>
  );
};

export default MainPage;
