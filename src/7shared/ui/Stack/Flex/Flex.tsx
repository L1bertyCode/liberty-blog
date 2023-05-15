import { ReactNode, memo } from "react";
import { classNames } from "7shared/lib/classNames/classNames";
import s from "./Flex.module.scss";

export type FlexJustify =
  | "start"
  | "center"
  | "end"
  | "between";
export type FlexAlign = "start" | "center" | "end";
export type FlexDiection = "row" | "column";

interface FlexProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  dirction: FlexDiection;
}
export const Flex = memo((props: FlexProps) => {
  const {
    className,
    children,
    justify = "start",
    align = "center",
    dirction = "row",
  } = props;
  return (
    <div className={classNames(s.flex, {}, [className])}>
      <div>Flex</div>
    </div>
  );
});
