import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

import s from "./CountrySelect.module.scss";
import { AppSelect } from "shared/ui/AppSelect/AppSelect";
import { Country } from "../../model/types/country";

import { Listbox } from "shared/ui/Popups";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readOnly?: boolean;
}

const options = [
  {
    value: Country.USA,
    content: Country.USA,
  },
  {
    value: Country.Germany,
    content: Country.Germany,
  },
  {
    value: Country.Russia,
    content: Country.Russia,
  },
];

export const CountrySelect = memo(
  (props: CountrySelectProps) => {
    const { value, onChange, readOnly, className } = props;
    const { t } = useTranslation();

    const onChangeHandler = (value: string) => {
      onChange?.(value as Country);
    };
    return (
      <Listbox
        className={classNames(s.countrySelect, {}, [
          className,
        ])}
        label={t("Choose the country")}
        defaultValue={t("Choose the country")}
        items={options}
        value={value}
        onChange={onChangeHandler}
        readOnly={readOnly}
        direction={"top left"}
      />
    );
  }
);
