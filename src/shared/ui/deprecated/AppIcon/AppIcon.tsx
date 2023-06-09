import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./AppIcon.module.scss";
export enum AppIconVarint {
  CLEAR = "clear",
  PRIMARY = "primary",
  INVERTED = "inverted",
}
export interface AppIconProps extends React.SVGProps<SVGAElement> {
  className?: string;
  Svg: React.FunctionComponent<React.SVGProps<SVGElement>>;
  variant?: AppIconVarint;
}
/**
 * @deprecated
 */
export const AppIcon = memo((props: AppIconProps) => {
  const {
    className,
    Svg,
    variant = AppIconVarint.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Svg
      className={classNames(s.appIcon, {}, [className, s[variant]])}
      {...otherProps}
    />
  );
});
