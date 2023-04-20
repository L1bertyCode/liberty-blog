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
  AppText,
  AppTextVariant,
} from "7shared/ui/AppText/AppText";

import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import {
  DynamicModuleLoader,
  ReducersList,
} from "7shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "7shared/lib/hooks/useAppDispatch";

export interface LoginFormProps {
  className?: string;
  isOpen?: boolean;
  onSuccess?: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
  const { className, isOpen, onSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );
  const onLoginClick = useCallback(async () => {
    dispatch(loginByUsername({ username, password }));
    const result = await dispatch(
      loginByUsername({ username, password })
    );
    console.log(result);
    if (result.meta.requestStatus === "fulfilled") {
      onSuccess();
    }
  }, [dispatch, username, password, onSuccess]);
  return (
    <DynamicModuleLoader
      reducers={initialReducers}
      removeAfterUnmount={true}
    >
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
          placeholder={t("Type username") || ""}
          type="text"
          className={s.input}
          autoFocus={isOpen}
          onChange={onChangeUsername}
          value={username}
        />
        <AppInput
          placeholder={t("Type password") || ""}
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
    </DynamicModuleLoader>
  );
});
export default LoginForm;
