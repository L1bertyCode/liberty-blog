import {
  InputHTMLAttributes,
  MutableRefObject,
  memo,
  useEffect,
  useRef,
} from "react";

import {
  Mods,
  classNames,
} from "@/shared/lib/classNames/classNames";
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

  onChange?: (value: string) => void;
}
// type HTMLAppInputProps = Omit<
//   InputHTMLAttributes<HTMLInputElement>,
//   "value" | "onChange" | "readOnly"
// >;

// interface AppInputProp extends HTMLAppInputProps {
//   className?: string;
//   value?: string | number;
//   type?: string;
//   placeholder?: string;
//   autoFocus?: boolean;
//   readOnly?: boolean;
//   onChange?: (value: string) => void;
// }

export const AppInput = memo((props: AppInputProps) => {
  const {
    className,
    type = "text",
    value,
    onChange,
    placeholder,
    autoFocus,
    readOnly,
    ...otherProps
  } = props;
  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange?.(e.target.value);
  };

  const inputRef =
    useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (autoFocus) {
      inputRef?.current?.focus();
    }
  }, [autoFocus]);
  const mods: Mods = {
    [s.readOnly]: readOnly,
  };
  return (
    <div
      className={classNames(s.appInputWrapper, mods, [
        className,
      ])}
    >
      {placeholder && (
        <div
          className={s.placeholder}
        >{`${placeholder}>`}</div>
      )}
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={s.appInput}
        autoFocus={autoFocus}
        readOnly={readOnly}
        {...otherProps}
      />
    </div>
  );
});
