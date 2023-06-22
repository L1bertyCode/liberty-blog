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

type HTMLAppInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>;
interface AppInputProps extends HTMLAppInputProps {
  className?: string;
  type?: string;
  value?: string | number;
  placeholder?: string;
  readOnly?: boolean;
  autoFocus?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;

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
    [s.readonly]: readOnly,
    [s.focused]: isFocused,
    [s.withAddonLeft]: Boolean(addonLeft),
    [s.withAddonRight]: Boolean(addonRight),
  };

  return (
    <div className={classNames(s.appInputWrapper, mods, [className])}>
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
});
