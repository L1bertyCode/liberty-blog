import { useTranslation } from "react-i18next";

import s from "./MainPage.module.scss";
import { Page } from "@/widgets/Page/Page";
import { StarRating } from "@/shared/ui/StarRating/StarRating";
import { RatingCard } from "@/entities/Rating";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      MainPage
      <RatingCard
        title={t("How do you like the article?")}
        feedbackTitle={t(
          "Leave feedback about the article"
        )}
      />
      {/* <StarRating size={50} /> */}
    </Page>
  );
};

export default MainPage;
