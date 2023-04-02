import { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "7shared/lib/classNames/classNames";

export enum AppButtonVariant {
  CLEAR = "clear", 
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  className?: string;
  variant?: AppButtonVariant;
}

import s from "./AppButton.module.scss";

export const AppButton = (props: AppButtonProps): ReturnType<React.FC> => {
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
