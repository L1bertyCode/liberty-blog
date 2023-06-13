import { memo } from "react";
import { useTheme } from "@/app/providers/ThemeProvider";

import {
  AppButton,
  AppButtonVariant,
} from "../../shared/ui/AppButton/AppButton";

import ThemeIcon from "@/shared/assets/icons/theme-icon.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./ThemeSwitcher.module.scss";
import { Theme } from "@/shared/const/theme";

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { theme = Theme.LIGHT, toggleTheme } = useTheme();
  const { className } = props;
  return (
    <AppButton
      variant={AppButtonVariant.CLEAR}
      onClick={toggleTheme}
      className={classNames(s.themeSwitcher, {}, [className])}>
      {/* {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />} */}

      <ThemeIcon className={s.themeIcon} />
    </AppButton>
  );
});
