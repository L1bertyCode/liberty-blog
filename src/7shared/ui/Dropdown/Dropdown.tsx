import { Menu } from "@headlessui/react";
import s from "./Dropdown.module.scss";
import { classNames } from "7shared/lib/classNames/classNames";
interface DropdownProps {
  className?: string;
}

export function Dropdown(props: DropdownProps) {
  const { className } = props;
  return (
    <Menu
      as="div"
      className={classNames(s.dropdown, {}, [className])}
    >
      <Menu.Button className={s.btn}>More</Menu.Button>
      <Menu.Items className={s.menuList}>
        <Menu.Item as="div" className={s.menuItem}>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
