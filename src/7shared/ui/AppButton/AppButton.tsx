import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import { classNames } from "7shared/lib/classNames/classNames";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

import s from "./AppButton.module.scss";

export const AppButton = (props: AppButtonProps) => {
  const { className, children, ...otherProps } = props;
  return (
    <button
      className={classNames(s.appButton, {}, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
