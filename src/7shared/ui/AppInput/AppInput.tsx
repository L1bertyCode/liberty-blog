import { InputHTMLAttributes, memo } from "react";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./AppInput.module.scss";

type HTMLAppInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>;
interface AppInputProps extends HTMLAppInputProps {
  className?: string;
  type?: string;
  value?: string;
  placholder?: string;
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
//   readonly?: boolean;
//   onChange?: (value: string) => void;
// }

export const AppInput = memo((props: AppInputProps) => {
  const {
    className,
    type = "text",
    value,
    onChange,
    placeholder,
    ...otherProps
  } = props;
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  return (
    <div className={classNames(s.appInputWrapper, {}, [className])}>
      {placeholder && <div className={s.placholder}>{`${placeholder}>`}</div>}
      <input
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={s.appInput}
      />
    </div>
  );
});
