import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./NotificationList.module.scss";
import { useNotifications } from "@/entities/Notification/api/notificationApi";
import { VStack } from "@/shared/ui/Stack";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import { Skeleton } from "@/shared/ui/Skeleton";

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 10000,
  });
  if (isLoading) {
    return (
      <VStack
        fullWidth
        gap="16"
        className={classNames(s.notificationList, {}, [className])}>
        <Skeleton
          width={"100%"}
          border={"8px"}
          height={"85px"}
        />
        <Skeleton
          width={"100%"}
          border={"8px"}
          height={"85px"}
        />
        <Skeleton
          width={"100%"}
          border={"8px"}
          height={"85px"}
        />
      </VStack>
    );
  }
  return (
    <VStack
      fullWidth
      gap="16"
      className={classNames(s.notificationList, {}, [className])}>
      {data?.map((item) => {
        return (
          <NotificationItem
            key={item?.id}
            item={item}
          />
        );
      })}
    </VStack>
  );
});
