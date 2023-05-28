import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

import s from "./NotificationItem.module.scss";

interface NotificationItemProps {
  className?: string;
}

export const NotificationItem = memo(
  (props: NotificationItemProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
      <div
        className={classNames(s.notificationItem, {}, [
          className,
        ])}
      >
        <div>NotificationItem</div>
      </div>
    );
  }
);
