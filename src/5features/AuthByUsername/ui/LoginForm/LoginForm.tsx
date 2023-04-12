import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./LoginForm.module.scss";
import { AppButton, AppButtonVariant } from "7shared/ui/AppButton/AppButton";
import { AppInput } from "7shared/ui/AppInput/AppInput";

interface LoginFormProps {
  className?: string;
  isOpen?: boolean;
  onClose: () => void;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className, onClose, isOpen } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(s.loginForm, {}, [className])}>
      <AppInput
        placeholder={t("Type username")}
        type="text"
        className={s.input}
        autoFocus={isOpen}
      />
      <AppInput
        placeholder={t("Type password")}
        type="text"
        className={s.input}
      />
      <AppButton
        onClick={onClose}
        className={s.loginBtn}
        variant={AppButtonVariant.OUTLINE}
      >
        {t("Login")}
      </AppButton>
    </div>
  );
});
