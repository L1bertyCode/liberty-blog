import { HTMLAttributes, ReactNode, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Card.module.scss";

export enum CardVariant {
  NORMAL = "normal",
  OUTLINED = "outlined",
  LIGHT = "light",
}
export type CardPadding = "0" | "8" | "16" | "24";
export type CardBorder = "round" | "normal";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
  fullWidth?: boolean;
  padding?: CardPadding;
  border?: CardBorder;
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
      className={classNames(s.card, { [s.fullWidth]: fullWidth }, [
        className,
        s[variant],
      ])}
      {...otherProps}>
      {children}
    </div>
  );
};
