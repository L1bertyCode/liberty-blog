import { useTranslation } from "react-i18next";
import s from "./MainPage.module.scss";
import { BugButton } from "1app/porviders/ErrorBoundary/ui/BubButton";
import { Counter } from "6entities/Counter";
const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div className={s.green}>
      {t("Main")}
      <BugButton />
      <Counter />
    </div>
  );
};

export default MainPage;
