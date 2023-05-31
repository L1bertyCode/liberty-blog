import { Menu } from "@headlessui/react";
import s from "./Dropdown.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ReactNode } from "react";
import { DropdownDirection } from "@/shared/types/ui";
import { AppLink } from "../../../AppLink/AppLink";
import { mapDirectionClass } from "../../styles/consts";
import commonS from "../../styles/popup.module.scss";
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
  direction?: DropdownDirection;
}

export function Dropdown(props: DropdownProps) {
  const {
    className,
    trigger,
    items,
    direction = "bottom left",
  } = props;
  const menuListClasses = [mapDirectionClass[direction]];

  return (
    <Menu
      as="div"
      className={classNames(s.dropdon, {}, [
        className,
        commonS.popup,
      ])}
    >
      <Menu.Button className={commonS.trigger}>
        {trigger}
      </Menu.Button>
      <Menu.Items
        className={classNames(
          s.menuList,
          {},
          menuListClasses
        )}
      >
        {items?.map((item, index) => {
          const content = ({
            active,
          }: {
            active: boolean;
          }) => (
            <button
              key={index}
              disabled={item.disabled}
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
          );

          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
              >
                {content}
              </Menu.Item>
            );
          }
          return (
            <Menu.Item as={"div"} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
