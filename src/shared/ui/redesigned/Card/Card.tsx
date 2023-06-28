import { HTMLAttributes, ReactNode, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Card.module.scss";

export type CardVariant = "normal" | "outlined" | "light";
export type CardPadding = "0" | "8" | "16" | "24";
export type CardBorder = "round_40" | "round_12" | "round_20";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
  fullWidth?: boolean;
  fullHeight?: boolean;
  padding?: CardPadding;
  borderRadius?: CardBorder;
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
    fullHeight,
    padding = "8",
    borderRadius = "round_12",
    ...otherProps
  } = props;
  const paddingClass = mapPaddingToClass[padding];

  return (
    <div
      className={classNames(
        s.card,
        { [s.fullWidth]: fullWidth, [s.fullHeight]: fullHeight },
        [className, s[variant], s[paddingClass], s[borderRadius]],
      )}
      {...otherProps}>
      {children}
    </div>
  );
};
