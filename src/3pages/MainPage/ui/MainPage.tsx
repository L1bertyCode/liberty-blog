import { useTranslation } from "react-i18next";
import s from "./MainPage.module.scss";
import { BugButton } from "1app/porviders/ErrorBoundary/ui/BubButton";
const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div className={s.green}>
      {t("Main")}
      <BugButton />
    </div>
  );
};

export default MainPage;
