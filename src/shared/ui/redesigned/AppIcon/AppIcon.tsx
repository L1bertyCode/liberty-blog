import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./AppIcon.module.scss";

type SvgProps = Omit<React.SVGProps<SVGElement>, "onClick">;

export interface AppIconBaseProps extends SvgProps {
  className?: string;
  Svg: React.FunctionComponent<React.SVGProps<SVGElement>>;
}
export interface NonClickableAppIconBaseProps extends AppIconBaseProps {
  clickable?: false;
}
export interface ClickableAppIconBaseProps extends AppIconBaseProps {
  clickable: true;
  onClick: () => void;
}
type AppIconProps = NonClickableAppIconBaseProps | ClickableAppIconBaseProps;

export const AppIcon = memo((props: AppIconProps) => {
  const {
    className,
    Svg,
    width = 32,
    height = 32,
    clickable,
    ...otherProps
  } = props;

  const icon = (
    <Svg
      width={width}
      height={height}
      className={classNames(s.appIcon, {}, [className])}
      {...otherProps}
      onClick={undefined}
    />
  );
  if (clickable) {
    return (
      <button
        type={"button"}
        className={s.button}
        onClick={props.onClick}>
        {icon}
      </button>
    );
  }
  return icon;
});
