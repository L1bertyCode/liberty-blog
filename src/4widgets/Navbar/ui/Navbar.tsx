import { useTranslation } from "react-i18next";

import { classNames } from "7shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}
export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={s.logo}>{t("Logo")}</div>
    </div>
  );
};
