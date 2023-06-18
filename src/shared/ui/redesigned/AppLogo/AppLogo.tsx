import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { HStack } from "@/shared/ui/deprecated//Stack";
import AppSvg from "@/shared/assets/icons/liberty.svg";

import s from "./AppLogo.module.scss";

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo = memo((props: AppLogoProps) => {
  const { className, size = 80 } = props;
  const { t } = useTranslation();
  return (
    <HStack
      fullWidth
      justify="center"
      className={classNames(s.appLogo, {}, [className])}>
      <div className={s.gradientBig} />
      <div className={s.gradientSmall} />
      <AppSvg
        width={size}
        height={size}
        // color="black"
        className={s.appSvg}
      />
    </HStack>
  );
});
