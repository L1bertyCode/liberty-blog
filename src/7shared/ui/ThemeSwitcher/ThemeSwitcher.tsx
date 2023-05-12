import { memo } from "react";
import {
  Theme,
  useTheme,
} from "1app/providers/ThemePorvider";

import {
  AppButton,
  AppButtonVariant,
} from "../AppButton/AppButton";

import ThemeIcon from "7shared/assets/icons/theme-icon.svg";
import { classNames } from "7shared/lib/classNames/classNames";
import s from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = memo(
  (props: ThemeSwitcherProps) => {
    const { theme = Theme.LIGHT, toggleTheme } = useTheme();
    const { className } = props;
    return (
      <AppButton
        variant={AppButtonVariant.CLEAR}
        onClick={toggleTheme}
        className={classNames(s.themeSwitcher, {}, [
          className,
        ])}
      >
        {/* {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />} */}

        <ThemeIcon className={s.themeIcon} />
      </AppButton>
    );
  }
);
