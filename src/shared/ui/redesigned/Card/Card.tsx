import { HTMLAttributes, ReactNode, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Card.module.scss";

export type CardVariant = "normal" | "outlined";
export type CardPadding = "0" | "8" | "16" | "24";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
  fullWidth?: boolean;
  padding?: CardPadding;
}
const mapPaddingToClass: Record<CardPadding, string> = {
  "0": "gap_0",
  "8": "gap_8",
  "16": "gap_16",
  "24": "gap_24",
};

export const Card = (props: CardProps) => {
  const {
    className,
    children,
    variant = "normal",
    fullWidth,
    padding = "8",
    ...otherProps
  } = props;
  const paddingClass = mapPaddingToClass[padding];

  return (
    <div
      className={classNames(s.card, { [s.fullWidth]: fullWidth }, [
        className,
        s[variant],
        s[paddingClass],
      ])}
      {...otherProps}>
      {children}
    </div>
  );
};
