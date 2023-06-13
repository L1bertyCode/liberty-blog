import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./NotificationItem.module.scss";
import { Notification } from "@/entities/Notification/model/types/notifications";
import { Card, CardVariant } from "@/shared/ui/Card";
import { AppText } from "@/shared/ui/AppText";
import { AppLink } from "@/shared/ui/AppLink";

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item } = props;
  const { t } = useTranslation();

  const content = (
    <Card
      variant={CardVariant.OUTLINED}
      className={classNames(s.notificationItem, {}, [className])}>
      <AppText
        title={item.title}
        text={item.description}
      />
    </Card>
  );
  if (item.href) {
    return (
      <AppLink
        className={s.link}
        to={item.href}
        target="_blank">
        {content}
      </AppLink>
    );
  }
  return content;
});
