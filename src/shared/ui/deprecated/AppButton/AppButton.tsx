import { ButtonHTMLAttributes, ReactNode, memo } from "react";
import { Mods, classNames } from "@/shared/lib/classNames/classNames";

export enum AppButtonVariant {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  OUTLINE_RED = "outline_red",

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
  fullWidth?: boolean;
}

import s from "./AppButton.module.scss";
/**
 * @deprecated
 */
export const AppButton = memo((props: AppButtonProps): ReturnType<React.FC> => {
  const {
    className,
    children,
    variant = AppButtonVariant.OUTLINE,
    size = AppButtonSize.M,
    square,
    disabled,
    fullWidth,
    ...otherProps
  } = props;
  const mods: Mods = {
    [s.square]: square,
    [s.disabled]: disabled,
    [s.fullWidth]: fullWidth,
  };
  return (
    <button
      disabled={disabled}
      className={classNames(s.appButton, mods, [
        className,
        s[variant],
        s[size],
      ])}
      {...otherProps}>
      {children}
    </button>
  );
});
