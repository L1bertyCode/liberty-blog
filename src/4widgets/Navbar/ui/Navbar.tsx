import { useTranslation } from "react-i18next";

import { classNames } from "7shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import { useState } from "react";
import {Modal} from "7shared/ui/Modal/Modal";
import { AppButton, AppButtonVariant } from "7shared/ui/AppButton/AppButton";

interface NavbarProps {
  className?: string;
}
export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const [isAuthModal, setIsAuthModal] = useState(false);

  const { t } = useTranslation();

  const onToggleMopdal=()=>{
    setIsAuthModal((prev) => !prev);
  }
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={s.logo}>{t("Logo")}</div>
      <div className={s.modal}>
        <AppButton
          onClick={() => {
            onToggleMopdal();
          }}
          variant={AppButtonVariant.CLEAR_INVERTED}
        >
          {t("Login")}
        </AppButton>
        <Modal isOpen={isAuthModal} onClose={() =>onToggleMopdal()}>123</Modal>
      </div>
    </div>
  );
};
