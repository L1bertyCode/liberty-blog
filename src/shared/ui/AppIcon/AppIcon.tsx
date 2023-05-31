import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./AppIcon.module.scss";
export enum AppIconVarint {
  CLEAR = "clear",
  PRIMARY = "primary",
  INVERTED = "inverted",
}
interface AppIconProps {
  className?: string;
  Svg: React.FunctionComponent<React.SVGProps<SVGElement>>;
  variant?: AppIconVarint;
}

export const AppIcon = memo((props: AppIconProps) => {
  const {
    className,
    Svg,
    variant = AppIconVarint.PRIMARY,
  } = props;
  return (
    <Svg
      className={classNames(s.appIcon, {}, [
        className,
        s[variant],
      ])}
    />
  );
});
