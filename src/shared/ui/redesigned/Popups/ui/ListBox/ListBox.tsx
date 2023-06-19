import { ReactNode } from "react";
import { Listbox as HListbox } from "@headlessui/react";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./ListBox.module.scss";
import { DefaultTFuncReturn } from "i18next";
import { DropdownDirection } from "@/shared/types/ui";
import { mapDirectionClass } from "../../styles/consts";
import commonS from "../../styles/popup.module.scss";
import { AppButton, AppButtonVariant } from "@/shared/ui/deprecated/AppButton";
export interface ListBoxItemProps {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}
interface ListBoxProps {
  onChange: (value: string) => void;
  items?: ListBoxItemProps[];
  className?: string;
  value?: string;
  label?: string | DefaultTFuncReturn;
  defaultValue?: string | DefaultTFuncReturn;
  readOnly?: boolean;
  direction?: DropdownDirection;
}

export function Listbox(props: ListBoxProps) {
  const {
    className,
    items,
    value,
    label,
    defaultValue,
    readOnly,
    onChange,
    direction = "bottom left",
  } = props;
  const optionsClasses = [mapDirectionClass[direction]];
  return (
    <HListbox
      as={"div"}
      className={classNames(
        s.listBox,
        {
          [commonS.disabled]: readOnly,
        },
        [className, commonS.popup],
      )}
      value={value}
      onChange={onChange}
      disabled={readOnly}>
      {label && <span className={s.label}>{`${label}>`}</span>}
      <HListbox.Button
        className={commonS.trigger}
        as="span">
        <AppButton variant={AppButtonVariant.OUTLINE}>
          {value ?? defaultValue}
        </AppButton>
      </HListbox.Button>
      <HListbox.Options
        className={classNames(s.optionList, {}, optionsClasses)}>
        {items?.map((item) => (
          <HListbox.Option
            as="span"
            key={item?.value}
            disabled={item?.disabled}
            value={item.value}>
            {({ active, selected }) => (
              <li
                className={classNames(
                  s.optionItem,
                  {
                    [s.active]: active,
                    [s.selected]: selected,
                    [s.disabled]: item?.disabled,
                  },
                  [],
                )}>
                {item?.content}
              </li>
            )}
          </HListbox.Option>
        ))}
      </HListbox.Options>
    </HListbox>
  );
}
