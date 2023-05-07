import { Page } from "7shared/ui/Page/Page";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  return <Page>{t("About")}</Page>;
};

export default AboutPage;
