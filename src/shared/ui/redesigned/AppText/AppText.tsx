import { memo } from "react";

import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import s from "./AppText.module.scss";

export type AppTextVariant = "primary" | "accent" | "error";

export type AppTextAlign = "right" | "left" | "center";

export type AppTextSize = "s" | "m" | "l";

export interface AppTextProps {
  className?: string;
  title?: string | undefined | null;
  text?: string | undefined | null;
  variant?: AppTextVariant;
  align?: AppTextAlign;
  bold?: boolean;
  size?: AppTextSize;

  "data-testid"?: string;
}

type HeaderTagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const mapSizeToHeader: Record<AppTextSize, HeaderTagType> = {
  s: "h3",
  m: "h2",
  l: "h1",
};
export const AppText = memo((props: AppTextProps) => {
  const {
    className,
    title,
    text,
    variant = "primary",
    align = "left",
    bold,
    size = "m",
    "data-testid": dataTestId = "AppText",
  } = props;
  const HeaderTag = mapSizeToHeader[size];
  const mods: Mods = { [s.bold]: bold };
  return (
    <div
      className={classNames(s.appText, mods, [
        className,
        s[variant],
        s[align],
        s[size],
      ])}>
      {title && (
        <HeaderTag
          data-testid={`${dataTestId}.Header`}
          className={s.title}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p
          data-testid={`${dataTestId}.Paragraph`}
          className={s.text}>
          {text}
        </p>
      )}
    </div>
  );
});
