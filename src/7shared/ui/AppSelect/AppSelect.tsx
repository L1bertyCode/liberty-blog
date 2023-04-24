import { ChangeEvent, memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Mods,
  classNames,
} from "7shared/lib/classNames/classNames";

import s from "./AppSelect.module.scss";

export interface SelectOption {
  value: string;
  content: string;
}

interface AppSelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange: (value: string) => void;
}

export const AppSelect = memo((props: AppSelectProps) => {
  const { className, label, options, value, onChange } =
    props;

  const { t } = useTranslation();

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
  const mods: Mods = {};
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
