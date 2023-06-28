import { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

import { LoginModal } from "@/features/AuthByUsername";

import { getUserAuthData } from "@/entities/User";

import {
  AppButton as AppButtonDeprecated,
  AppButtonVariant as AppButtonVariantDeprecated,
} from "@/shared/ui/deprecated/AppButton";

import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";

import {
  AppLink as AppLinkDeprecated,
  AppLinkVariant as AppLinkVariantDeprecated,
} from "@/shared/ui/deprecated/AppLink";
import {
  AppText as AppTextDeprecated,
  AppTextVariant as AppTextVariantDeprecated,
} from "@/shared/ui/deprecated/AppText";
import { HStack } from "@/shared/ui/redesigned/Stack";

import { NotificationButton } from "@/features/notificationButton";
import { AvataDropdown } from "@/features/avataDropdown";
import { getRouteArticleCreate } from "@/shared/const/router";
import { ToggleFeatures } from "@/shared/lib/features";
import { AppButton } from "@/shared/ui/redesigned/AppButton";

interface NavbarProps {
  className?: string;
}
export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const { t } = useTranslation();

  const onCloseeModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (authData) {
    return (
      <ToggleFeatures
        feature={"isAppRedesigned"}
        on={
          <header className={classNames(s.navbarRedesigned, {}, [className])}>
            <div className={s.modal}>
              <HStack
                gap="16"
                className={s.actions}>
                <NotificationButton />
                <AvataDropdown />
              </HStack>

              <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseeModal}
              />
            </div>
          </header>
        }
        off={
          <header className={classNames(s.navbar, {}, [className])}>
            <AppTextDeprecated
              className={s.logo}
              title={t("Logo")}
              variant={AppTextVariantDeprecated.INVERTED}
            />
            <AppLinkDeprecated
              to={getRouteArticleCreate()}
              variant={AppLinkVariantDeprecated.SECONDARY}
              className={s.createBtn}>
              {t("Create article")}
            </AppLinkDeprecated>

            <div className={s.modal}>
              <HStack
                gap="16"
                className={s.actions}>
                <NotificationButton />
                <AvataDropdown />
              </HStack>

              <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseeModal}
              />
            </div>
          </header>
        }
      />
    );
  }

  return (
    <ToggleFeatures
      feature={"isAppRedesigned"}
      on={
        <header className={classNames(s.navbarRedesigned, {}, [className])}>
          <div className={s.modal}>
            <AppButton
              className={s.btn}
              onClick={() => {
                onShowModal();
              }}
              variant={"clear"}>
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
      }
      off={
        <header className={classNames(s.navbar, {}, [className])}>
          <div className={s.logo}>{t("Logo")}</div>
          <AppLinkDeprecated to={getRouteArticleCreate()}>
            {t("Create article")}
          </AppLinkDeprecated>
          <div className={s.modal}>
            <AppButtonDeprecated
              className={s.btn}
              onClick={() => {
                onShowModal();
              }}
              variant={AppButtonVariantDeprecated.CLEAR_INVERTED}>
              {t("Login")}
            </AppButtonDeprecated>
            {isAuthModal && (
              <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseeModal}
              />
            )}
          </div>
        </header>
      }
    />
  );
});
