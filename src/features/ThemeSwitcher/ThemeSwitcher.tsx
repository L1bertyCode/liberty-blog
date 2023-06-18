import { memo, useCallback } from "react";
import { useTheme } from "@/app/providers/ThemeProvider";

import {
  AppButton,
  AppButtonVariant,
} from "../../shared/ui/deprecated/AppButton/AppButton";

import ThemeIconDeprecated from "@/shared/assets/icons/theme-icon.svg";
import ThemeIcon from "@/shared/assets/icons/theme.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./ThemeSwitcher.module.scss";
import { Theme } from "@/shared/const/theme";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { saveJsonSettings } from "@/entities/User";
import {
  AppIcon as AppIconDeprecated,
  AppIconVarint,
} from "@/shared/ui/deprecated/AppIcon";
import { ToggleFeatures } from "@/shared/lib/features";
import { AppIcon } from "@/shared/ui/redesigned/AppIcon";

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();
  const { className } = props;
  const dispatch = useAppDispatch();
  const onToggleTheme = useCallback(() => {
    toggleTheme((newTheme) => {
      console.log(`Theme changed on ${newTheme}`);
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [toggleTheme]);
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <AppIcon
          clickable
          onClick={onToggleTheme}
          Svg={ThemeIcon}
          width={"40px"}
          height={"40px"}
        />
      }
      off={
        <AppButton
          variant={AppButtonVariant.CLEAR}
          onClick={onToggleTheme}
          className={classNames(s.themeSwitcher, {}, [className])}>
          {/* {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />} */}
          <AppIconDeprecated
            Svg={ThemeIconDeprecated}
            width={"40px"}
            height={"40px"}
            variant={AppIconVarint.INVERTED}
          />
        </AppButton>
      }
    />
  );
});
