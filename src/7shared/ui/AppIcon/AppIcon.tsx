import { memo } from "react";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./AppIcon.module.scss";
export enum AppIconVarint {
  CLEAR = "clear",
  PRIMARY = "primary",
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
    variant = AppIconVarint.CLEAR,
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
