import { ChangeEvent, memo, useMemo } from "react";
import { Mods, classNames } from "@/shared/lib/classNames/classNames";

import s from "./AppSelect.module.scss";
import { DefaultTFuncReturn } from "i18next";

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface AppSelectProps<T extends string> {
  className?: string;
  label?: string | DefaultTFuncReturn;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readOnly?: boolean;
}

export const AppSelect = <T extends string>(props: AppSelectProps<T>) => {
  const { className, label, options, value, onChange, readOnly } = props;

  const optionsList = useMemo(() => {
    return options?.map((optn) => (
      <option
        className={s.option}
        value={optn.value}
        key={optn.value}>
        {optn.content}
      </option>
    ));
  }, [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e?.target?.value as T);
  };
  const mods: Mods = {
    [s.readOnly]: readOnly,
  };
  return (
    <div className={classNames(s.appSelectWrapper, mods, [className])}>
      {label && <span className={s.label}>{`${label}>`}</span>}
      <select
        disabled={readOnly}
        name=""
        id=""
        value={value}
        onChange={onChangeHandler}
        className={s.appSelect}>
        {optionsList}
      </select>
    </div>
  );
};
