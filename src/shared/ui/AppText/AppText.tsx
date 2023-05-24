import { memo } from "react";

import {
  Mods,
  classNames,
} from "shared/lib/classNames/classNames";
import s from "./AppText.module.scss";

export enum AppTextVariant {
  PRYMARY = "primary",
  INVERTED = "inverted",
  ERROR = "error",
}
export enum AppTextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

export enum AppTextSize {
  S = "size_s",
  M = "size_m",
  L = "size_l",
}

export interface AppTextProps {
  className?: string;
  title?: string | undefined | null;
  text?: string | undefined | null;
  variant?: AppTextVariant;
  align?: AppTextAlign;
  size?: AppTextSize;

  "data-testid"?: string;
}

type HeaderTagType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";
const mapSizeToHeader: Record<AppTextSize, HeaderTagType> =
  {
    [AppTextSize.S]: "h3",
    [AppTextSize.M]: "h2",
    [AppTextSize.L]: "h1",
  };
export const AppText = memo((props: AppTextProps) => {
  const {
    className,
    title,
    text,
    variant = AppTextVariant.PRYMARY,
    align = AppTextAlign.LEFT,
    size = AppTextSize.M,
    "data-testid": dataTestId = "AppText",
  } = props;
  const HeaderTag = mapSizeToHeader[size];
  const mods: Mods = {};
  return (
    <div
      className={classNames(s.appText, mods, [
        className,
        s[variant],
        s[align],
        s[size],
      ])}
    >
      {title && (
        <HeaderTag
          data-testid={`${dataTestId}.Header`}
          className={s.title}
        >
          {title}
        </HeaderTag>
      )}
      {text && (
        <p
          data-testid={`${dataTestId}.Paragraph`}
          className={s.text}
        >
          {text}
        </p>
      )}
    </div>
  );
});
