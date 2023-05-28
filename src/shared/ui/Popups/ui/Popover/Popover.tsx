import { ReactNode, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Popover } from "@headlessui/react";
import s from "./Popover.module.scss";
import commonS from "../../styles/popup.module.scss";
import { DropdownDirection } from "shared/types/ui";

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: DropdownDirection;
}

const AppPopover = memo((props: PopoverProps) => {
  const {
    className,
    trigger,
    direction = "bottom left",
  } = props;
  const { t } = useTranslation();
  return (
    <Popover
      className={classNames(commonS.popup, {}, [className])}
    >
      <Popover.Button className={commonS.btn}>
        {trigger}
      </Popover.Button>

      <Popover.Panel className="absolute z-10">
        <div className="grid grid-cols-2">
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
        </div>

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  );
});
export default AppPopover;
