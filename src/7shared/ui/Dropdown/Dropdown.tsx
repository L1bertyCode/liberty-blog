import { Menu } from "@headlessui/react";
import s from "./Dropdown.module.scss";
import { classNames } from "7shared/lib/classNames/classNames";
import { ReactNode } from "react";

export interface DropdownItmeProps {
  value?: string;
  content?: string;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}
interface DropdownProps {
  className?: string;
  items?: DropdownItmeProps[];
  trigger: ReactNode;
}

export function Dropdown(props: DropdownProps) {
  const { className, trigger, items } = props;
  return (
    <Menu
      as="div"
      className={classNames(s.dropdown, {}, [className])}
    >
      <Menu.Button className={s.btn}>{trigger}</Menu.Button>
      <Menu.Items className={s.menuList}>
        {items?.map((item, index) => {
          return (
            <Menu.Item as="div" disabled={item.disabled}>
              {({ active }) => (
                <button
                  type="button"
                  onClick={item.onClick}
                  className={classNames(
                    s.menuItem,
                    { [s.active]: active },
                    []
                  )}
                >
                  {item.content}
                </button>
              )}
            </Menu.Item>
          );
        })}

    
      </Menu.Items>
    </Menu>
  );
}
