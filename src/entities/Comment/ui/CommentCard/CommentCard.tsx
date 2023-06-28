import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./CommentCard.module.scss";
import { Comment } from "@/entities/Comment/model/types/comment";
import { Avatar as AvatarDeprecated } from "@/shared/ui/deprecated/Avatar";
import { AppText as AppTextDeprecated } from "@/shared/ui/deprecated/AppText";
import { Skeleton as SkeletonDeprecated } from "@/shared/ui/deprecated/Skeleton";
import { AppNavLink as AppNavLinkDeprecated } from "@/shared/ui/deprecated/AppNavLink";

import { VStack } from "@/shared/ui/redesigned/Stack";
import { getRouteProfile } from "@/shared/const/router";
import { ToggleFeatures } from "@/shared/lib/features";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";
import { AppNavLink } from "@/shared/ui/redesigned/AppNavLink";
import { Avatar } from "@/shared/ui/redesigned/Avatar";
import { AppText } from "@/shared/ui/redesigned/AppText";
import { Card } from "@/shared/ui/redesigned/Card";

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
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
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
        }
        off={
          <VStack
            data-testid={"CommentCard.Loading"}
            gap="8"
            fullWidth
            className={classNames(s.commentCard, {}, [className, s.loading])}>
            <div className={s.header}>
              <SkeletonDeprecated
                border={"50%"}
                width={"30px"}
                height={"30px"}
              />
              <SkeletonDeprecated
                className={s.username}
                width={"120px"}
                height={"22px"}
              />
            </div>
            <SkeletonDeprecated className={s.text} />
          </VStack>
        }
      />
    );
  }
  if (!comment) {
    return null;
  }
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card
          padding="24"
          borderRadius="round_40"
          fullWidth>
          <VStack
            data-testid={"CommentCard.Content"}
            gap="16"
            fullWidth
            className={classNames(s.commentCardRedesigned, {}, [className])}>
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
              bold
            />
          </VStack>
        </Card>
      }
      off={
        <VStack
          data-testid={"CommentCard.Content"}
          gap="8"
          fullWidth
          className={classNames(s.commentCard, {}, [className])}>
          <AppNavLinkDeprecated
            to={getRouteProfile(comment?.user.id)}
            className={s.header}>
            {comment?.user?.avatar ? (
              <AvatarDeprecated
                size={30}
                src={comment?.user.avatar}
              />
            ) : null}
            <AppTextDeprecated
              className={s.username}
              title={comment?.user?.username}
            />
          </AppNavLinkDeprecated>
          <AppTextDeprecated
            text={comment?.text}
            className={s.text}
          />
        </VStack>
      }
    />
  );
});
