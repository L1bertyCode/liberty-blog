import { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./LoginForm.module.scss";
import {
  AppButton,
  AppButtonVariant,
} from "7shared/ui/AppButton/AppButton";
import { AppInput } from "7shared/ui/AppInput/AppInput";
import { useSelector, useStore } from "react-redux";
import {
  loginActions,
  loginReducer,
} from "5features/AuthByUsername/model/slices/loginSlice";

import { loginByUsername } from "5features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import {
  ReducStoreWIthManager,
  useAppDispatch,
} from "1app/porviders/StroreProvider";
import {
  AppText,
  AppTextVariant,
} from "7shared/ui/AppText/AppText";

import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";

export interface LoginFormProps {
  className?: string;
  isOpen?: boolean;
  onClose: () => void;
}

const LoginForm = memo((props: LoginFormProps) => {
  const { className, isOpen } = props;
  const { t } = useTranslation();
  const dispath = useAppDispatch();
  const store = useStore() as ReducStoreWIthManager;

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  useEffect(() => {
    store.reducerManager.add("loginForm", loginReducer);
    return () => {
      store.reducerManager.remove(
        "loginForm",
        loginReducer
      );

    };
    // eslint-disable-next-line
  }, []);

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
          text={t(
            "You entered an incorrect username or password"
          )}
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
export default LoginForm;
