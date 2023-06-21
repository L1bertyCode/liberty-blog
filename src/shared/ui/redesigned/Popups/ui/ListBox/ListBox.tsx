import { ReactNode } from "react";
import { Listbox as HListbox } from "@headlessui/react";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./ListBox.module.scss";
import { DefaultTFuncReturn } from "i18next";
import { DropdownDirection } from "@/shared/types/ui";
import { mapDirectionClass } from "../../styles/consts";
import commonS from "../../styles/popup.module.scss";
import { AppButton } from "@/shared/ui/redesigned/AppButton";

export interface ListBoxItemProps<T extends string> {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}
interface ListBoxProps<T extends string> {
  className?: string;
  items?: ListBoxItemProps<T>[];
  value?: T;

  onChange?: (value: T) => void;
  label?: string | DefaultTFuncReturn;
  defaultValue?: string | DefaultTFuncReturn;
  readOnly?: boolean;
  direction?: DropdownDirection;
}

export function Listbox<T extends string>(props: ListBoxProps<T>) {
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
  const optionsClasses = [mapDirectionClass[direction], commonS.menuList];
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
        <AppButton variant={"filled"}>{value ?? defaultValue}</AppButton>
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
                    [commonS.active]: active,
                    // [s.selected]: selected,
                    [s.disabled]: item?.disabled,
                  },
                  [],
                )}>
                {selected}
                {item?.content}
              </li>
            )}
          </HListbox.Option>
        ))}
      </HListbox.Options>
    </HListbox>
  );
}
