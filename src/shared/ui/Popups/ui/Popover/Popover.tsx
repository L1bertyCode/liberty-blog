import { ReactNode, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Popover as HPopover } from "@headlessui/react";
import s from "./Popover.module.scss";
import commonS from "../../styles/popup.module.scss";
import { DropdownDirection } from "@/shared/types/ui";
import { mapDirectionClass } from "../../styles/consts";
interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: DropdownDirection;
  children: ReactNode;
}

export const Popover = memo((props: PopoverProps) => {
  const {
    className,
    trigger,
    children,
    direction = "bottom right",
  } = props;
  const menuListClasses = [mapDirectionClass[direction]];
  const { t } = useTranslation();
  return (
    <HPopover
      className={classNames(s.popover, {}, [
        className,
        commonS.popup,
      ])}
    >
      <HPopover.Button
        as={"div"}
        className={commonS.trigger}
      >
        {trigger}
      </HPopover.Button>

      <HPopover.Panel
        className={classNames(s.panel, {}, menuListClasses)}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  );
});
