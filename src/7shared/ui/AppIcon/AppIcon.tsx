import { memo } from "react";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./AppIcon.module.scss";

interface AppIconProps {
  className?: string;
  Svg: React.FunctionComponent<React.SVGProps<SVGElement>>;
}

export const AppIcon = memo((props: AppIconProps) => {
  const { className, Svg } = props;
  return (
    <Svg
      className={classNames(s.appIcon, {}, [className])}
    />
  );
});
