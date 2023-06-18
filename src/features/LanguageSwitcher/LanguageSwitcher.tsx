import { useTranslation } from "react-i18next";
import {
  AppButton as AppButtonDeprecated,
  AppButtonVariant,
} from "../../shared/ui/deprecated/AppButton/AppButton";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { ToggleFeatures } from "@/shared/lib/features";
import { AppButton } from "@/shared/ui/redesigned/AppButton";

// import s from "./LanguageSwitcher.module.scss";

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}
export const LanguageSwitcher = memo((props: LanguageSwitcherProps) => {
  const { className, short } = props;
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <AppButton
          className={classNames("languageSwitcher", {}, [className])}
          variant={"clear"}
          onClick={toggleLanguage}>
          {short ? t("ShortLangauge") : t("Langauge")}
        </AppButton>
      }
      off={
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

          <AppButtonDeprecated
            className={classNames("languageSwitcher", {}, [className])}
            variant={AppButtonVariant.CLEAR_INVERTED}
            onClick={toggleLanguage}>
            {short ? t("ShortLangauge") : t("Langauge")}
          </AppButtonDeprecated>
        </div>
      }
    />
  );
});
