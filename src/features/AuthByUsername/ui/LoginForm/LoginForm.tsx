import { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./LoginForm.module.scss";
import {
  AppButton as AppButtonDeprecated,
  AppButtonVariant as AppButtonVariantDeprecated,
} from "@/shared/ui/deprecated/AppButton";
import { AppInput as AppInputDeprecated } from "@/shared/ui/deprecated/AppInput";
import { useSelector, useStore } from "react-redux";
import {
  loginActions,
  loginReducer,
} from "@/features/AuthByUsername/model/slices/loginSlice";

import { loginByUsername } from "@/features/AuthByUsername/model/services/loginByUsername/loginByUsername";

import {
  AppText as AppTextDeprecated,
  AppTextVariant as AppTextVariantDeprecated,
} from "@/shared/ui/deprecated/AppText";

import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { ToggleFeatures } from "@/shared/lib/features";
import { AppInput } from "@/shared/ui/redesigned/AppInput";
import { AppButton } from "@/shared/ui/redesigned/AppButton";
import { AppText } from "@/shared/ui/redesigned/AppText";
import { useForceUpdate } from "@/shared/lib/render/forceUpdate";

export interface LoginFormProps {
  className?: string;
  isOpen?: boolean;
  onSuccess: () => void;
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

  const forceUpdate = useForceUpdate();

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );
  const onLoginClick = useCallback(async () => {
    dispatch(loginByUsername({ username, password }));
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === "fulfilled") {
      onSuccess();
      forceUpdate();
    }
  }, [dispatch, username, password, onSuccess]);
  return (
    <DynamicModuleLoader
      reducers={initialReducers}
      removeAfterUnmount={true}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <div className={classNames(s.loginForm, {}, [className])}>
            <AppText title={t("Authorization form")} />
            {error && (
              <AppText
                text={t("You entered an incorrect username or password")}
                variant={"error"}
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
              variant={"outline"}>
              {t("Login")}
            </AppButton>
          </div>
        }
        off={
          <div className={classNames(s.loginForm, {}, [className])}>
            <AppText title={t("Authorization form")} />
            {error && (
              <AppTextDeprecated
                text={t("You entered an incorrect username or password")}
                variant={AppTextVariantDeprecated.ERROR}
              />
            )}
            <AppInputDeprecated
              placeholder={t("Type username") || ""}
              type="text"
              className={s.input}
              autoFocus={isOpen}
              onChange={onChangeUsername}
              value={username}
            />
            <AppInputDeprecated
              placeholder={t("Type password") || ""}
              type="text"
              className={s.input}
              onChange={onChangePassword}
              value={password}
            />
            <AppButtonDeprecated
              disabled={isLoading}
              onClick={onLoginClick}
              className={s.loginBtn}
              variant={AppButtonVariantDeprecated.OUTLINE}>
              {t("Login")}
            </AppButtonDeprecated>
          </div>
        }
      />
    </DynamicModuleLoader>
  );
});
export default LoginForm;
