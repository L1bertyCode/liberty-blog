import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Code.module.scss";
import {
  AppButton as AppButtonDeprecated,
  AppButtonVariant as AppButtonVariantDeprecated,
} from "@/shared/ui/deprecated/AppButton";
import {
  AppIcon as AppIconDeprecated,
  AppIconVarint as AppIconVarintDeprecated,
} from "@/shared/ui/deprecated/AppIcon";
import CopyIcon from "@/shared/assets/icons/copy-20-20.svg";
import { ToggleFeatures } from "@/shared/lib/features";
import { AppButton } from "../AppButton";
import { AppIcon } from "../AppIcon";

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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <pre className={classNames(s.codeRedesigned, {}, [className])}>
          <AppIcon
            onClick={onCopy}
            Svg={CopyIcon}
            className={s.copyBtn}
            clickable
          />
          <code>{text}</code>
        </pre>
      }
      off={
        <pre className={classNames(s.code, {}, [className])}>
          <AppButtonDeprecated
            onClick={onCopy}
            className={s.copyBtn}
            variant={AppButtonVariantDeprecated.CLEAR}>
            <AppIconDeprecated
              Svg={CopyIcon}
              className={s.copyIcon}
              variant={AppIconVarintDeprecated.CLEAR}
            />
          </AppButtonDeprecated>
          <code>{text}</code>
        </pre>
      }
    />
  );
});
