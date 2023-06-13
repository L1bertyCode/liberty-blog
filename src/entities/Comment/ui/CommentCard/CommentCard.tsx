import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./CommentCard.module.scss";
import { Comment } from "@/entities/Comment/model/types/comment";
import { Avatar } from "@/shared/ui/Avatar";
import { AppText } from "@/shared/ui/AppText";
import { Skeleton } from "@/shared/ui/Skeleton";
import { AppNavLink } from "@/shared/ui/AppNavLink";

import { VStack } from "@/shared/ui/Stack";
import { getRouteProfile } from "@/shared/const/router";

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;
  const { t } = useTranslation();
  if (isLoading) {
    return (
      <VStack
        data-testid={"CommentCard.Loading"}
        gap="8"
        fullWidth
        className={classNames(s.commentCard, {}, [className, s.loading])}>
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
      </VStack>
    );
  }
  if (!comment) {
    return null;
  }
  return (
    <VStack
      data-testid={"CommentCard.Content"}
      gap="8"
      fullWidth
      className={classNames(s.commentCard, {}, [className])}>
      <AppNavLink
        to={getRouteProfile(comment?.user.id)}
        className={s.header}>
        {comment?.user?.avatar ? (
          <Avatar
            size={30}
            src={comment?.user.avatar}
          />
        ) : null}
        <AppText
          className={s.username}
          title={comment?.user?.username}
        />
      </AppNavLink>
      <AppText
        text={comment?.text}
        className={s.text}
      />
    </VStack>
  );
});
