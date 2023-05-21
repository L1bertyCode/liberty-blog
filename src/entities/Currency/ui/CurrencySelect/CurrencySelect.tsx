import { memo } from "react";
import { useTranslation } from "react-i18next";

import { Currency } from "../../model/types/currency";

import { AppSelect } from "shared/ui/AppSelect/AppSelect";
import { classNames } from "shared/lib/classNames/classNames";

import s from "./CurrencySelect.module.scss";
import { Listbox } from "shared/ui/ListBox/ListBox";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readOnly?: boolean;
}
const options = [
  {
    value: Currency.USD,
    content: Currency.USD,
  },
  {
    value: Currency.EUR,
    content: Currency.EUR,
  },
  {
    value: Currency.RUB,
    content: Currency.RUB,
  },
];

export const CurrencySelect = memo(
  (props: CurrencySelectProps) => {
    const { value, onChange, readOnly, className } = props;
    const { t } = useTranslation();

    const onChangeHandler = (value: string) => {
      onChange?.(value as Currency);
    };
    return (
      <Listbox
        className={classNames(s.currensySelect, {}, [
          className,
        ])}
        label={t("Specify the currency")}
        defaultValue={t("Specify the currency")}
        items={options}
        value={value}
        onChange={onChangeHandler}
        readOnly={readOnly}
        direction={"top right"}
      />
    );
  }
);
