import { ReactNode } from "react";
import { Listbox as HListbox } from "@headlessui/react";
import { classNames } from "7shared/lib/classNames/classNames";
import s from "./ListBox.module.scss";
import {
  AppButton,
  AppButtonVariant,
} from "../AppButton/AppButton";
import { DefaultTFuncReturn } from "i18next";

type DropdownDirection = "top" | "bottom";

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

const mapDirectionClass: Record<DropdownDirection, string> =
  {
    bottom: s.optionListBottom,
    top: s.optionListTop,
  };

export function Listbox(props: ListBoxProps) {
  const {
    className,
    items,
    value,
    label,
    defaultValue,
    readOnly,
    onChange,
    direction = "bottom",
  } = props;
  const optionsClasses = [mapDirectionClass[direction]];
  return (
    <HListbox
      as={"div"}
      className={classNames(
        s.listBox,
        {
          [s.disabled]: readOnly,
        },
        [className]
      )}
      value={value}
      onChange={onChange}
      disabled={readOnly}
    >
      {label && (
        <span className={s.label}>{`${label}>`}</span>
      )}
      <HListbox.Button className={s.trigger} as="span">
        <AppButton variant={AppButtonVariant.OUTLINE}>
          {value ?? defaultValue}
        </AppButton>
      </HListbox.Button>
      <HListbox.Options
        className={classNames(
          s.optionList,
          {},
          optionsClasses
        )}
      >
        {items?.map((item) => (
          <HListbox.Option
            as="span"
            key={item?.value}
            disabled={item?.disabled}
            value={item.value}
          >
            {({ active, selected }) => (
              <li
                className={classNames(
                  s.optionItem,
                  {
                    [s.active]: active,
                    [s.selected]: selected,
                    [s.disabled]: item?.disabled,
                  },
                  []
                )}
              >
                {item?.content}
              </li>
            )}
          </HListbox.Option>
        ))}
      </HListbox.Options>
    </HListbox>
  );
}
// import { memo } from "react";
// import { useTranslation } from "react-i18next";
// import { classNames } from "7shared/lib/classNames/classNames";

// import s from "./ListBox.module.scss";

// interface ListBoxProps {
//   className?: string;
// }

// export const ListBox = memo((props: ListBoxProps) => {
//   const { className } = props;
//   const { t } = useTranslation();
//   return (
//     <div className={classNames(s.listBox, {}, [className])}>
//       <div>ListBox</div>
//     </div>
//   );
