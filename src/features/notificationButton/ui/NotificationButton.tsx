import { NotificationList } from "entities/Notification";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import {
  AppButton,
  AppButtonVariant,
} from "shared/ui/AppButton/AppButton";
import {
  AppIcon,
  AppIconVarint,
} from "shared/ui/AppIcon/AppIcon";
import { Popover } from "shared/ui/Popups";
import NotificationIcon from "shared/assets/icons/notification-20-20.svg";

import s from "./NotificationButton.module.scss";
interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo(
  (props: NotificationButtonProps) => {
    const { className } = props;
    return (
      <Popover
        className={classNames("", {}, [className])}
        direction="bottom left"
        trigger={
          <AppButton variant={AppButtonVariant.CLEAR}>
            <AppIcon
              variant={AppIconVarint.INVERTED}
              Svg={NotificationIcon}
            />
          </AppButton>
        }
      >
        <NotificationList className={s.notifications} />
      </Popover>
    );
  }
);
