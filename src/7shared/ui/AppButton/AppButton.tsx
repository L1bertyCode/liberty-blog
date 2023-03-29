import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import { classNames } from "7shared/lib/classNames/classNames";

export enum AppButtonVariant {
  CLEAR = "clear",
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  variant?: AppButtonVariant;
}

import s from "./AppButton.module.scss";

export const AppButton = (props: AppButtonProps) => {
  const { className, children, variant, ...otherProps } = props;
  return (
    <button
      className={classNames(s.appButton, {}, [className, s[variant]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
