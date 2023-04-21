import { memo } from "react";

import {
  Mods,
  classNames,
} from "7shared/lib/classNames/classNames";
import s from "./AppText.module.scss";

export enum AppTextVariant {
  DEFAULT = "primary",
  ERROR = "error",
}
export enum AppTextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

export interface AppTextProps {
  className?: string;
  title?: string | undefined | null;
  text?: string | undefined | null;
  variant?: AppTextVariant;
  align?: AppTextAlign;
}

export const AppText = memo((props: AppTextProps) => {
  const {
    className,
    title,
    text,
    variant = AppTextVariant.DEFAULT,
    align = AppTextAlign.LEFT,
  } = props;
  const mods: Mods = {};
  return (
    <div
      className={classNames(s.appText, mods, [
        className,
        s[variant],
        s[align],
      ])}
    >
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  );
});
