import { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

import { LoginModal } from "@/features/AuthByUsername";

import { getUserAuthData } from "@/entities/User";

import { AppButton, AppButtonVariant } from "@/shared/ui/AppButton";

import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";

import { AppLink, AppLinkVariant } from "@/shared/ui/AppLink";
import { AppText, AppTextVariant } from "@/shared/ui/AppText";
import { HStack } from "@/shared/ui/Stack";

import { NotificationButton } from "@/features/notificationButton";
import { AvataDropdown } from "@/features/avataDropdown";
import { getRouteArticleCreate } from "@/shared/const/router";

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
      <header className={classNames(s.navbar, {}, [className])}>
        <AppText
          className={s.logo}
          title={t("Logo")}
          variant={AppTextVariant.INVERTED}
        />
        <AppLink
          to={getRouteArticleCreate()}
          variant={AppLinkVariant.SECONDARY}
          className={s.createBtn}>
          {t("Create article")}
        </AppLink>

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
    );
  }
  return (
    <header className={classNames(s.navbar, {}, [className])}>
      <div className={s.logo}>{t("Logo")}</div>
      <AppLink to={getRouteArticleCreate()}>{t("Create article")}</AppLink>
      <div className={s.modal}>
        <AppButton
          className={s.btn}
          onClick={() => {
            onShowModal();
          }}
          variant={AppButtonVariant.CLEAR_INVERTED}>
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
