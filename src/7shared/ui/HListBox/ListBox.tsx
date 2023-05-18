import { useState } from "react";
import { Listbox as HListbox } from "@headlessui/react";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";
import s from "./ListBox.module.scss";
import {
  AppButton,
  AppButtonVariant,
} from "../AppButton/AppButton";

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];
interface ListBoxProps {
  className?: string;
}
export function MyHListbox(props: ListBoxProps) {
  const [selectedPerson, setSelectedPerson] = useState(
    people[0]
  );
  const { className } = props;
  return (
    <HListbox
      as={"div"}
      className={classNames(s.listBox, {}, [className])}
      value={selectedPerson}
      onChange={setSelectedPerson}
    >
      <HListbox.Button className={s.trigger}>
        <AppButton variant={AppButtonVariant.OUTLINE}>
          {selectedPerson.name}
        </AppButton>
      </HListbox.Button>
      <HListbox.Options className={s.oprionList}>
        {people.map((person) => (
          <HListbox.Option
            key={person.id}
            value={person}
            disabled={person.unavailable}
          >
            {({ active, selected }) => (
              <li
                className={classNames(
                  s.optionItem,
                  {
                    [s.active]: active,
                    [s.selected]: selected,
                  },
                  []
                )}
              >
                {person.name}
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
