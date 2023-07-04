import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ScrollTollbar.module.scss";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { ScrollToTopButton } from "@/features/scrollToTopButton";

interface ScrollTollbarProps {
  className?: string;
}

export const ScrollTollbar = memo((props: ScrollTollbarProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <VStack
      justify="center"
      align="center"
      fullWidth
      className={classNames(s.scrollTollbar, {}, [className])}>
      <ScrollToTopButton />
    </VStack>
  );
});
