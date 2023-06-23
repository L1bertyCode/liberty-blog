import {
  InputHTMLAttributes,
  MutableRefObject,
  ReactNode,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";

import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import s from "./AppInput.module.scss";
import { HStack } from "../Stack";
import { AppText } from "../AppText";

type HTMLAppInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>;
type AppInputSise = "s" | "m" | "l";

interface AppInputProps extends HTMLAppInputProps {
  className?: string;
  type?: string;
  value?: string | number;
  placeholder?: string;
  readOnly?: boolean;
  autoFocus?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  label?: string;
  hieght?: AppInputSise;

  onChange?: (value: string) => void;
}

export const AppInput = memo((props: AppInputProps) => {
  const {
    className,
    type = "text",
    value,
    onChange,
    placeholder,
    autoFocus,
    readOnly,
    addonLeft,
    addonRight,
    label,
    hieght = "m",
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  const onFocus = () => {
    setIsFocused(true);
  };
  const onBlur = () => {
    setIsFocused(false);
  };

  const mods: Mods = {
    [s.readOnly]: readOnly,
    [s.focused]: isFocused,
    [s.withAddonLeft]: Boolean(addonLeft),
    [s.withAddonRight]: Boolean(addonRight),
  };
  const input = (
    <div className={classNames(s.appInputWrapper, mods, [className, s[hieght]])}>
      <div className={s.addonLeft}>{addonLeft}</div>
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={s.appInput}
        onFocus={onFocus}
        onBlur={onBlur}
        autoFocus={autoFocus}
        placeholder={placeholder}
        readOnly={readOnly}
        {...otherProps}
      />
      <div className={s.addonRight}>{addonRight}</div>
    </div>
  );
  if (label) {
    return (
      <HStack
        fullWidth
        gap="8">
        <AppText
          className={readOnly ? s.readOnly : ""}
          text={label}
        />
        {input}
      </HStack>
    );
  }
  return input;
});
