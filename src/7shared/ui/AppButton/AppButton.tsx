import { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "7shared/lib/classNames/classNames";

export enum AppButtonVariant {
  CLEAR = "clear",
  OUTLINE = "outline",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum AppButtonSize {
  M = "m",
  L = "l",
  XL = "xl",
}
interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: AppButtonVariant;
  size?: AppButtonSize;
  square?: boolean;
}

import s from "./AppButton.module.scss";

export const AppButton = (props: AppButtonProps): ReturnType<React.FC> => {
  const {
    className,
    children,
    variant,
    size = AppButtonSize.M,
    square,
    ...otherProps
  } = props;
  return (
    <button
      className={classNames(s.appButton, { [s.square]: square }, [
        className,
        s[variant],
        s[size],
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
