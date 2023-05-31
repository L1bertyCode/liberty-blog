import { NotificationList } from "@/entities/Notification";
import { memo, useCallback, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
  AppButton,
  AppButtonVariant,
} from "@/shared/ui/AppButton/AppButton";
import {
  AppIcon,
  AppIconVarint,
} from "@/shared/ui/AppIcon/AppIcon";
import { Popover } from "@/shared/ui/Popups";
import NotificationIcon from "@/shared/assets/icons/notification-20-20.svg";

import s from "./NotificationButton.module.scss";
import { Drawer } from "@/shared/ui/Drawer/Drawer";
import {
  BrowserView,
  MobileView,
} from "react-device-detect";
import { AnimationProvider } from "@/shared/lib/components/AnimationProvider";
interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo(
  (props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);
    const onOpenDrawer = useCallback(() => {
      setIsOpen(true);
    }, []);
    const onCloseDrawer = useCallback(() => {
      setIsOpen(false);
    }, []);
    const trigger = (
      <AppButton
        onClick={onOpenDrawer}
        variant={AppButtonVariant.CLEAR}
      >
        <AppIcon
          variant={AppIconVarint.INVERTED}
          Svg={NotificationIcon}
        />
      </AppButton>
    );

    return (
      <div>
        <BrowserView>
          <Popover
            className={classNames(
              s.NotificationButton,
              {},
              [className]
            )}
            direction="bottom left"
            trigger={trigger}
          >
            <NotificationList className={s.notifications} />
          </Popover>
        </BrowserView>
        <MobileView>
          {trigger}
          <AnimationProvider>
            <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
              <NotificationList />
            </Drawer>
          </AnimationProvider>
        </MobileView>
      </div>
    );
  }
);
