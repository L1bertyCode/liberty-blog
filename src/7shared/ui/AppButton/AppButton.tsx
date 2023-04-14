import { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "7shared/lib/classNames/classNames";

export enum AppButtonVariant {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
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
  disabled?: boolean;
}

import s from "./AppButton.module.scss";

export const AppButton = (props: AppButtonProps): ReturnType<React.FC> => {
  const {
    className,
    children,
    variant = AppButtonVariant.OUTLINE,
    size = AppButtonSize.M,
    square,
    disabled,
    ...otherProps
  } = props;
  return (
    <button
      disabled={disabled}
      className={classNames(
        s.appButton,
        { [s.square]: square, [s.disabled]: disabled },
        [className, s[variant], s[size]]
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};
