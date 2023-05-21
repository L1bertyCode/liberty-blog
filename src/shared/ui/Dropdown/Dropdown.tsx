import { Menu } from "@headlessui/react";
import s from "./Dropdown.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ReactNode } from "react";
import { DropdownDirection } from "shared/types/ui";
import { AppLink } from "../AppLink/AppLink";
import { RoutePath } from "shared/config/routesConfig/routesConfig";

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

const mapDirectionClass: Record<DropdownDirection, string> =
  {
    "bottom left": s.menuListBottomLeft,
    "bottom right": s.menuListBottomRight,
    "top left": s.menuListTopLeft,
    "top right": s.menuListTopRight,
  };

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
      className={classNames(s.dropdown, {}, [className])}
    >
      <Menu.Button className={s.btn}>{trigger}</Menu.Button>
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
