import { memo } from "react";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./AppText.module.scss";

interface AppTextProps {
  className?: string;
  title?: string;
  text?: string;
}

export const AppText = memo((props: AppTextProps) => {
  const { className, title, text } = props;
  return (
    <div className={classNames(s.appText, {}, [className])}>
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  );
});
