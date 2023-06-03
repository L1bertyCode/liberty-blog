import { HTMLAttributes, ReactNode, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Card.module.scss";

export enum CardVariant {
  NORMAL = "normal",
  OUTLINED = "outlined",
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
  fullWidth?: boolean;
}

export const Card = (props: CardProps) => {
  const {
    className,
    children,
    variant = CardVariant.NORMAL,
    fullWidth,
    ...otherProps
  } = props;
  return (
    <div
      className={classNames(
        s.card,
        { [s.fullWidth]: fullWidth },
        [className, s[variant]]
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};
