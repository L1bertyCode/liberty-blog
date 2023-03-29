import { ReactNode } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

import { classNames } from "7shared/lib/classNames/classNames";
import s from "./AppNavLink.module.scss";

export enum AppNavLinkVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
interface AppNavLinkProps extends NavLinkProps {
  children: ReactNode;
  variant?: AppNavLinkVariant;
  className?: string;
}

export const AppNavLink = (props: AppNavLinkProps) => {
  const {
    className,
    to,
    children,
    variant = AppNavLinkVariant.PRIMARY,
    ...otherProps
  } = props;
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(`${s.appNavLink} ${isActive ? s.active : ""}`, {}, [
          className,
          s[variant],
        ])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
};
