import { memo } from "react";
import { Theme, useTheme } from "1app/porviders/ThemePorvider";

import { AppButton, AppButtonVariant } from "../AppButton/AppButton";

import DarkICon from "7shared/assets/icons/theme-dark.svg";
import LightICon from "7shared/assets/icons/theme-light.svg";
import { classNames } from "7shared/lib/classNames/classNames";
import s from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const { className } = props;
  return (
    <AppButton
      variant={AppButtonVariant.CLEAR}
      onClick={toggleTheme}
      className={classNames(s.themeSwitcher, {}, [className])}
    >
      {theme === Theme.LIGHT ? <LightICon /> : <DarkICon />}
    </AppButton>
  );
});
