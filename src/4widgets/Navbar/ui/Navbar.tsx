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
import { RoutePath } from "7shared/config/routesConfig/routesConfig";
import {
  AppLink,
  AppLinkVariant,
} from "7shared/ui/AppLink/AppLink";
import {
  AppText,
  AppTextVariant,
} from "7shared/ui/AppText/AppText";
import { Dropdown } from "7shared/ui/Dropdown/Dropdown";
import { Avatar } from "7shared/ui/Avatar/Avatar";

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
      <header
        className={classNames(s.navbar, {}, [className])}
      >
        <AppText
          className={s.logo}
          title={t("Logo")}
          variant={AppTextVariant.INVERTED}
        />
        <AppLink
          to={RoutePath.articles_created}
          variant={AppLinkVariant.SECONDARY}
          className={s.createBtn}
        >
          {t("Create article")}
        </AppLink>
        <div className={s.modal}>
          <Dropdown
            direction="bottom left"
            items={[
              {
                content: t("Profile") || "",
                href: RoutePath.profile + authData.id,
              },
              {
                content: t("Logout") || "",
                onClick: onLogout,
              },
            ]}
            trigger={
              <Avatar src={authData.avatar} size={30} />
            }
          />
          {/* <AppButton
            className={s.btn}
            onClick={() => {
              onLogout();
            }}
            variant={AppButtonVariant.CLEAR_INVERTED}
          >
            {t("Logout")}
          </AppButton> */}
          <LoginModal
            isOpen={isAuthModal}
            onClose={onCloseeModal}
          />
        </div>
      </header>
    );
  }
  return (
    <header
      className={classNames(s.navbar, {}, [className])}
    >
      <div className={s.logo}>{t("Logo")}</div>
      <AppLink to={RoutePath.articles_created}>
        {t("Create article")}
      </AppLink>
      <div className={s.modal}>
        <AppButton
          className={s.btn}
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
    </header>
  );
});
