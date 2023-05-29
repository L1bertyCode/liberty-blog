import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

import s from "./NotificationList.module.scss";
import { useNotifications } from "entities/Notification/api/notificationApi";
import { VStack } from "shared/ui/Stack";
import { NotificationItem } from "../NotificationItem/NotificationItem";

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo(
  (props: NotificationListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data, isLoading } = useNotifications(null);
    return (
      <VStack
        max
        gap="16"
        className={classNames(s.notificationList, {}, [
          className,
        ])}
      >
        {data?.map((item) => {
          return (
            <NotificationItem key={item?.id} item={item} />
          );
        })}
      </VStack>
    );
  }
);
