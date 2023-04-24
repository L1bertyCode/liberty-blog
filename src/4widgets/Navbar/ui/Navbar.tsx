import {
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

import { LoginModal } from "5features/AuthByUsername";

import {
  getUserAuthData,
  userActions,
} from "6entities/User";

import {
  AppButton,
  AppButtonVariant,
} from "7shared/ui/AppButton/AppButton";

import { classNames } from "7shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import { useAppDispatch } from "7shared/lib/hooks/useAppDispatch";
import { userSlice } from "6entities/User/model/slices/userSlice";

interface NavbarProps {
  className?: string;
}
export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const { t } = useTranslation();

  const onCloseeModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div
        className={classNames(s.navbar, {}, [className])}
      >
        <div className={s.logo}>{t("Logo")}</div>
        <div className={s.modal}>
          <AppButton
            onClick={() => {
              onLogout();
            }}
            variant={AppButtonVariant.CLEAR_INVERTED}
          >
            {t("Logout")}
          </AppButton>
          {/* eslint-disable  */}
          <LoginModal
            isOpen={isAuthModal}
            onClose={onCloseeModal}
          />
        </div>
      </div>
    );
  }
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={s.logo}>{t("Logo")}</div>
      <div className={s.modal}>
        <AppButton
          onClick={() => {
            onShowModal();
          }}
          variant={AppButtonVariant.CLEAR_INVERTED}
        >
          {t("Login")}
        </AppButton>
        {/* eslint-disable  */}
        {isAuthModal && (
          <LoginModal
            isOpen={isAuthModal}
            onClose={onCloseeModal}
          />
        )}
      </div>
    </div>
  );
});
