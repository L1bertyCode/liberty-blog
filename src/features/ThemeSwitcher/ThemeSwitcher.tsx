import { memo, useCallback } from "react";
import { useTheme } from "@/app/providers/ThemeProvider";

import {
  AppButton,
  AppButtonVariant,
} from "../../shared/ui/AppButton/AppButton";

import ThemeIcon from "@/shared/assets/icons/theme-icon.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./ThemeSwitcher.module.scss";
import { Theme } from "@/shared/const/theme";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { saveJsonSettings } from "@/entities/User";

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { theme = Theme.LIGHT, toggleTheme } = useTheme();
  const { className } = props;
  const dispatch = useAppDispatch();
  const onToggleTheme = useCallback(() => {
    toggleTheme((newTheme) => {
      console.log(`Theme changed on ${newTheme}`);
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [toggleTheme]);
  return (
    <AppButton
      variant={AppButtonVariant.CLEAR}
      onClick={onToggleTheme}
      className={classNames(s.themeSwitcher, {}, [className])}>
      {/* {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />} */}

      <ThemeIcon className={s.themeIcon} />
    </AppButton>
  );
});
