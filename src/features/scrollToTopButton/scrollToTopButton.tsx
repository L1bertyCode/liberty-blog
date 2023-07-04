import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ScrollToTopButton.module.scss";
import { AppIcon } from "@/shared/ui/redesigned/AppIcon";
import CircleIcon from "@/shared/assets/icons/circle-up.svg";

interface ScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <AppIcon
      Svg={CircleIcon}
      clickable
      onClick={onClick}
      width={"32px"}
      height={"32px"}
      className={classNames(s.scrollToTopButton, {}, [className])}
    />
  );
});
