import { useTranslation } from "react-i18next";
import { AppButton, AppButtonVariant } from "../AppButton/AppButton";

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <div>
      {/* <select name={t("Langauge")}>
          <option>
            <AppButton
              variant={AppButtonVariant.CLEAR}
              onClick={toggleLanguage}
            >
              {t("Langauge")}
            </AppButton>
          </option>
          <option>EN</option>
        </select> */}

      <AppButton variant={AppButtonVariant.PRIMARY} onClick={toggleLanguage}>
        {t("Langauge")}
      </AppButton>
    </div>
  );
};
