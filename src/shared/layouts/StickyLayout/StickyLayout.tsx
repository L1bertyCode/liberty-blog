import { ReactElement, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./StickyLayout.module.scss";

interface StickyLayoutProps {
  className?: string;
  left?: ReactElement;
  content: ReactElement;
  right?: ReactElement;
}

export const StickyLayout = memo((props: StickyLayoutProps) => {
  const { className, content, left, right } = props;

  return (
    <div className={classNames(s.stickyLayout, {}, [className])}>
      {left && <div className={s.left}>{left}</div>}
      <div className={s.content}>{content}</div>
      {right && <div className={s.right}>{right}</div>}
    </div>
  );
});
