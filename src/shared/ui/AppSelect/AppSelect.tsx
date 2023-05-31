import { ChangeEvent, memo, useMemo } from "react";
import {
  Mods,
  classNames,
} from "@/shared/lib/classNames/classNames";

import s from "./AppSelect.module.scss";
import { DefaultTFuncReturn } from "i18next";

export interface SelectOption {
  value: string;
  content: string;
}

interface AppSelectProps {
  className?: string;
  label?: string | DefaultTFuncReturn;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export const AppSelect = memo((props: AppSelectProps) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readOnly,
  } = props;

  const optionsList = useMemo(() => {
    return options?.map((optn) => (
      <option
        className={s.option}
        value={optn.value}
        key={optn.value}
      >
        {optn.content}
      </option>
    ));
  }, [options]);

  const onChangeHandler = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    onChange?.(e?.target?.value);
  };
  const mods: Mods = {
    [s.readOnly]: readOnly,
  };
  return (
    <div
      className={classNames(s.appSelectWrapper, mods, [
        className,
      ])}
    >
      {label && (
        <span className={s.label}>{`${label}>`}</span>
      )}
      <select
        disabled={readOnly}
        name=""
        id=""
        value={value}
        onChange={onChangeHandler}
        className={s.appSelect}
      >
        {optionsList}
      </select>
    </div>
  );
});
