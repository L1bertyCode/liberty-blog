import { ReactNode, memo } from "react";
import { LinkProps } from "react-router-dom";

import { classNames } from "@/shared/lib/classNames/classNames";
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
/**
 * @deprecated
 */
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
      {...otherProps}
      to={to}
      className={classNames("appLink", {}, [className, s[variant]])}>
      {children}
    </Link>
  );
});
