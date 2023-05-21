import { HTMLAttributes, ReactNode, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import s from "./Card.module.scss";

export enum CardVariant {
  NORMAL = "normal",
  OUTLINED = "outlined",
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
}

export const Card = (props: CardProps) => {
  const {
    className,
    children,
    variant = CardVariant.NORMAL,
    ...otherProps
  } = props;
  return (
    <div
      className={classNames(s.card, {}, [
        className,
        s[variant],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  );
};
