import { useTranslation } from "react-i18next";
import { AppButton, AppButtonVariant } from "../AppButton/AppButton";
import { classNames } from "7shared/lib/classNames/classNames";

// import s from "./LanguageSwitcher.module.scss";

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}
export const LanguageSwitcher = (props: LanguageSwitcherProps) => {
  const { className, short } = props;
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

      <AppButton
        className={classNames("languageSwitcher", {}, [className])}
        variant={AppButtonVariant.CLEAR_INVERTED}
        onClick={toggleLanguage}
      >
        {short ? t("ShortLangauge") : t("Langauge")}
      </AppButton>
    </div>
  );
};
