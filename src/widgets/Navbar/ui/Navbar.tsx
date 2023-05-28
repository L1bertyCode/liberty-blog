import {
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

import { LoginModal } from "features/AuthByUsername";

import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "entities/User";

import {
  AppButton,
  AppButtonVariant,
} from "shared/ui/AppButton/AppButton";

import { classNames } from "shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

import { RoutePath } from "shared/config/routesConfig/routesConfig";
import {
  AppLink,
  AppLinkVariant,
} from "shared/ui/AppLink/AppLink";
import {
  AppText,
  AppTextVariant,
} from "shared/ui/AppText/AppText";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { HStack } from "shared/ui/Stack";
import {
  AppIcon,
  AppIconVarint,
} from "shared/ui/AppIcon/AppIcon";
import NotificationIcon from "shared/assets/icons/notification-20-20.svg";
import { Dropdown } from "shared/ui/Popups";

interface NavbarProps {
  className?: string;
}
export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

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

  const isAdminPanelAvalible = isAdmin || isManager;

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
          <HStack gap="16" className={s.actions}>
            <AppButton variant={AppButtonVariant.CLEAR}>
              <AppIcon
                variant={AppIconVarint.INVERTED}
                Svg={NotificationIcon}
              />
            </AppButton>
            <Dropdown
              direction="bottom left"
              items={[
                ...(isAdminPanelAvalible
                  ? [
                      {
                        content: t("Admin") || "",
                        href: RoutePath.admin_panel,
                      },
                    ]
                  : []),
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
          </HStack>

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
