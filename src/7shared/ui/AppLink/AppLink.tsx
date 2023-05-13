import { ReactNode, memo } from "react";
import { LinkProps } from "react-router-dom";

import { classNames } from "7shared/lib/classNames/classNames";
import s from "./AppLink.module.scss";
import { Link } from "react-router-dom";

export enum AppLinkVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  RED = "red",
}
interface AppLinkProps extends LinkProps {
  children: ReactNode;
  variant?: AppLinkVariant;
  className?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    className,
    to,
    children,
    variant = AppLinkVariant.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(``, {}, [
        className,
        s[variant],
      ])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
