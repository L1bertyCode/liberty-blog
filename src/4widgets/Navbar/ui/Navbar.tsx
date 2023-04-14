import { useTranslation } from "react-i18next";

import { classNames } from "7shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import { useState } from "react";
import { AppButton, AppButtonVariant } from "7shared/ui/AppButton/AppButton";
import { LoginModal } from "5features/AuthByUsername";

interface NavbarProps {
  className?: string;
}
export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const [isAuthModal, setIsAuthModal] = useState(false);

  const { t } = useTranslation();

  const onCloseeModal = () => {
    setIsAuthModal(false);
  };
  const onShowModal = () => {
    setIsAuthModal(true);
  };
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
        <LoginModal isOpen={isAuthModal} onClose={onCloseeModal} />
      </div>
    </div>
  );
};
