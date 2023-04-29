import { ReactNode, memo } from "react";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./Code.module.scss";
import { AppButton } from "7shared/ui/AppButton/AppButton";

interface CodeProps {
  className?: string;
  children: ReactNode;
}

export const Code = memo((props: CodeProps) => {
  const { className, children } = props;
  return (
    <pre className={classNames(s.code, {}, [className])}>
      <AppButton className={s.copyBtn}>Copy</AppButton>
      <code>{children}</code>
    </pre>
  );
});
