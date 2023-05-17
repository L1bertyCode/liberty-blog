import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./CommentCard.module.scss";
import { Comment } from "6entities/Comment/model/types/comment";
import { Avatar } from "7shared/ui/Avatar/Avatar";
import { AppText } from "7shared/ui/AppText/AppText";
import { Skeleton } from "7shared/ui/Skeleton/Skeleton";
import { AppNavLink } from "7shared/ui/AppNavLink/AppNavLink";
import { RoutePath } from "7shared/config/routesConfig/routesConfig";
import { VStack } from "7shared/ui/Stack";

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(
  (props: CommentCardProps) => {
    const { className, comment, isLoading } = props;
    const { t } = useTranslation();
    if (isLoading) {
      return (
        <div
          className={classNames(s.commentCard, {}, [
            className,
            s.loading,
          ])}
        >
          <div className={s.header}>
            <Skeleton
              border={"50%"}
              width={"30px"}
              height={"30px"}
            />
            <Skeleton
              className={s.username}
              width={"120px"}
              height={"22px"}
            />
          </div>
          <Skeleton className={s.text} />
        </div>
      );
    }
    if (!comment) {
      return null;
    }
    return (
      <VStack
        gap="8"
        max
        className={classNames(s.commentCard, {}, [
          className,
        ])}
      >
        <AppNavLink
          to={`${RoutePath.profile}${comment?.user.id}`}
          className={s.header}
        >
          {comment?.user?.avatar ? (
            <Avatar size={30} src={comment?.user.avatar} />
          ) : null}
          <AppText
            className={s.username}
            title={comment?.user?.username}
          />
        </AppNavLink>
        <AppText text={comment?.text} className={s.text} />
      </VStack>
    );
  }
);
