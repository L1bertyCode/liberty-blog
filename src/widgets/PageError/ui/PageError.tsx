import { AppButton } from "shared/ui/AppButton/AppButton";
import { useTranslation } from "react-i18next";

interface PageErrorProps {
  className?: string;
}

import s from "./PageError.module.scss";

export const PageError = ({
  className,
}: PageErrorProps) => {
  const { t } = useTranslation();
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={s.pageError}>
      <div>{t("An unexpected error occurred")}</div>
      <AppButton onClick={reloadPage} className={s.btn}>
        {t("Refresh the page")}
      </AppButton>
    </div>
  );
};
