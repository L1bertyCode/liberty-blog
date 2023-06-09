import { NotificationList } from "@/entities/Notification";
import { memo, useCallback, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
  AppButton as AppButtonDeprecaated,
  AppButtonVariant as AppButtonVariantDeprecated,
} from "@/shared/ui/deprecated/AppButton";
import {
  AppIcon as AppIconDeprecaated,
  AppIconVarint,
} from "@/shared/ui/deprecated/AppIcon";
import { Popover as PopoverDeprecaated } from "@/shared/ui/deprecated/Popups";
import NotificationIconDeprecated from "@/shared/assets/icons/notification-20-20.svg";
import NotificationIcon from "@/shared/assets/icons/notification.svg";

import s from "./NotificationButton.module.scss";
import { Drawer } from "@/shared/ui/redesigned/Drawer";
import { BrowserView, MobileView } from "react-device-detect";
import { ToggleFeatures } from "@/shared/lib/features";
import { AppButton } from "@/shared/ui/redesigned/AppButton";
import { AppIcon } from "@/shared/ui/redesigned/AppIcon";
import { Popover } from "@/shared/ui/redesigned/Popups";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;

  const [isOpen, setIsOpen] = useState(false);
  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);
  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);
  const trigger = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <AppIcon
          onClick={onOpenDrawer}
          Svg={NotificationIcon}
          clickable
        />
      }
      off={
        <AppButtonDeprecaated
          onClick={onOpenDrawer}
          variant={AppButtonVariantDeprecated.CLEAR}>
          <AppIconDeprecaated
            variant={AppIconVarint.INVERTED}
            Svg={NotificationIconDeprecated}
          />
        </AppButtonDeprecaated>
      }
    />
  );

  return (
    <div>
      <BrowserView>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <Popover
              className={classNames(s.NotificationButton, {}, [className])}
              direction="bottom left"
              trigger={trigger}>
              <NotificationList className={s.notifications} />
            </Popover>
          }
          off={
            <PopoverDeprecaated
              className={classNames(s.NotificationButton, {}, [className])}
              direction="bottom left"
              trigger={trigger}>
              <NotificationList className={s.notifications} />
            </PopoverDeprecaated>
          }
        />
      </BrowserView>
      <MobileView>
        {trigger}

        <Drawer
          isOpen={isOpen}
          onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </div>
  );
});
