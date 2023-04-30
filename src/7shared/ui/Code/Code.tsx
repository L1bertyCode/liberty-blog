import { ReactNode, memo, useCallback } from "react";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./Code.module.scss";
import {
  AppButton,
  AppButtonVariant,
} from "7shared/ui/AppButton/AppButton";
import {
  AppIcon,
  AppIconVarint,
} from "7shared/ui/AppIcon/AppIcon";
import CopyIcon from "7shared/assets/icons/copy-20-20.svg";

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);
  return (
    <pre className={classNames(s.code, {}, [className])}>
      <AppButton
        onClick={onCopy}
        className={s.copyBtn}
        variant={AppButtonVariant.CLEAR}
      >
        <AppIcon
          Svg={CopyIcon}
          className={s.copyIcon}
          variant={AppIconVarint.CLEAR}
        />
      </AppButton>
      <code>{text}</code>
    </pre>
  );
});
