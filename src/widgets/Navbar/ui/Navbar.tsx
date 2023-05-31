import { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

import { LoginModal } from "@/features/AuthByUsername";

import { getUserAuthData } from "@/entities/User";

import {
  AppButton,
  AppButtonVariant,
} from "@/shared/ui/AppButton/AppButton";

import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";

import { RoutePath } from "@/shared/config/routesConfig/routesConfig";
import {
  AppLink,
  AppLinkVariant,
} from "@/shared/ui/AppLink/AppLink";
import {
  AppText,
  AppTextVariant,
} from "@/shared/ui/AppText/AppText";
import { HStack } from "@/shared/ui/Stack";

import { NotificationButton } from "@/features/notificationButton";
import { AvataDropdown } from "@/features/avataDropdown";


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
