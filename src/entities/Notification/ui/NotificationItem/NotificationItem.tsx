import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./NotificationItem.module.scss";
import { Notification } from "@/entities/Notification/model/types/notifications";
import {
  Card as CardDeprecated,
  CardVariant as CardVariantDeprecated,
} from "@/shared/ui/deprecated/Card";
import { AppText as AppTextDeprecated } from "@/shared/ui/deprecated/AppText";
import { AppLink } from "@/shared/ui/deprecated/AppLink";
import { ToggleFeatures } from "@/shared/lib/features";
import { Card } from "@/shared/ui/redesigned/Card";
import { AppText } from "@/shared/ui/redesigned/AppText";

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item } = props;
  const { t } = useTranslation();

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card
          variant={"outlined"}
          padding="24"
          className={classNames(s.notificationItem, {}, [className])}>
          <AppText
            title={item.title}
            text={item.description}
          />
        </Card>
      }
      off={
        <CardDeprecated
          variant={CardVariantDeprecated.OUTLINED}
          className={classNames(s.notificationItem, {}, [className])}>
          <AppTextDeprecated
            title={item.title}
            text={item.description}
          />
        </CardDeprecated>
      }
    />
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
