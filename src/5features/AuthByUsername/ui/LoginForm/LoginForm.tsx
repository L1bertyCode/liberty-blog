import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./LoginForm.module.scss";
import {
  AppButton,
  AppButtonVariant,
} from "7shared/ui/AppButton/AppButton";
import { AppInput } from "7shared/ui/AppInput/AppInput";
import { useSelector } from "react-redux";
import { loginActions } from "5features/AuthByUsername/model/slices/loginSlice";
import { getLoginState } from "5features/AuthByUsername/model/selectors/getLoginState";
import { loginByUsername } from "5features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { useAppDispatch } from "1app/porviders/StroreProvider";
import {
  AppText,
  AppTextVariant,
} from "7shared/ui/AppText/AppText";

interface LoginFormProps {
  className?: string;
  isOpen?: boolean;
  onClose: () => void;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className, onClose, isOpen } = props;
  const { t } = useTranslation();
  const dispath = useAppDispatch();
  const { password, username, error, isLoading } =
    useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispath(loginActions.setUsername(value));
    },
    [dispath]
  );
  const onChangePassword = useCallback(
    (value: string) => {
      dispath(loginActions.setPassword(value));
    },
    [dispath]
  );
  const onLoginClick = useCallback(() => {
    dispath(loginByUsername({ username, password }));
  }, [dispath, username, password]);
  return (
    <div
      className={classNames(s.loginForm, {}, [className])}
    >
      <AppText title={t("Authorization form")} />
      {error && (
        <AppText
          text={error}
          variant={AppTextVariant.ERROR}
        />
      )}
      <AppInput
        placeholder={t("Type username")}
        type="text"
        className={s.input}
        autoFocus={isOpen}
        onChange={onChangeUsername}
        value={username}
      />
      <AppInput
        placeholder={t("Type password")}
        type="text"
        className={s.input}
        onChange={onChangePassword}
        value={password}
      />
      <AppButton
        disabled={isLoading}
        onClick={onLoginClick}
        className={s.loginBtn}
        variant={AppButtonVariant.OUTLINE}
      >
        {t("Login")}
      </AppButton>
    </div>
  );
});
