import { DetailedHTMLProps, HTMLAttributes, ReactNode, memo } from "react";
import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import s from "./Flex.module.scss";

export type FlexJustify = "start" | "center" | "end" | "between";
export type FlexAlign = "start" | "center" | "end";
export type FlexDirection = "row" | "column";
export type FlexGap = "4" | "8" | "16" | "32";

const justifyClasses: Record<FlexJustify, string> = {
  start: s.justifyStart,
  center: s.justifyCenter,
  end: s.justifyEnd,
  between: s.justifyBeteen,
};

const alignClasses: Record<FlexAlign, string> = {
  start: s.alignStart,
  center: s.alignCenter,
  end: s.alignEnd,
};
const directionClasses: Record<FlexDirection, string> = {
  row: s.directionRow,
  column: s.directionColumn,
};
const gapClasses: Record<FlexGap, string> = {
  "4": s.gap4,
  "8": s.gap8,
  "16": s.gap16,
  "32": s.gap32,
};
type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  fullWidth?: boolean;
}
export const Flex = memo((props: FlexProps) => {
  const {
    className,
    children,
    justify = "start",
    align = "center",
    direction = "row",
    gap,
    fullWidth,
    ...otherProps
  } = props;
  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];
  const mods: Mods = {
    [s.fullWidth]: fullWidth,
  };
  return (
    <div
      className={classNames(s.flex, mods, classes)}
      {...otherProps}>
      {children}
    </div>
  );
});
