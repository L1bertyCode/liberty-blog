import { ButtonHTMLAttributes, ReactNode, memo } from "react";
import { Mods, classNames } from "@/shared/lib/classNames/classNames";

export type AppButtonVariant = "clear" | "outline";

export type AppButtonSize = "m" | "l" | "xl";

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

export const AppButton = memo((props: AppButtonProps): ReturnType<React.FC> => {
  const {
    className,
    children,
    variant = "outline",
    size = "m",
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
