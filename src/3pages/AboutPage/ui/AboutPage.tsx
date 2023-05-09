import { Page } from "4widgets/Page/Page";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  return <Page>{t("About")}</Page>;
};

export default AboutPage;
