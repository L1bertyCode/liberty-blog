import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

import s from "./NotificationList.module.scss";
import { useNotifications } from "entities/Notification/api/notificationApi";

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo(
  (props: NotificationListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {} = useNotifications
    return (
      <div
        className={classNames(s.notificationList, {}, [
          className,
        ])}
      >
        <div>NotificationList</div>
      </div>
    );
  }
);
