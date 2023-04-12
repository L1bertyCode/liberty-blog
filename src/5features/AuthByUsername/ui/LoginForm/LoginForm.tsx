import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./LoginForm.module.scss";
import { AppButton } from "7shared/ui/AppButton/AppButton";
import { AppInput } from "7shared/ui/AppInput/AppInput";

interface LoginFormProps {
  className?: string;
  onClose: () => void;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className, onClose } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(s.loginForm, {}, [className])}>
      <AppInput type="text" className={s.input} />
      <AppInput type="text" className={s.input} />
      <AppButton onClick={onClose} className={s.loginBtn}>
        {t("Login")}
      </AppButton>
    </div>
  );
});
