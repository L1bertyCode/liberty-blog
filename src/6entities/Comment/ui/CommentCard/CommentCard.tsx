import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./CommentCard.module.scss";
import { Comment } from "6entities/Comment/model/types/comment";
import { Avatar } from "7shared/ui/Avatar/Avatar";
import { AppText } from "7shared/ui/AppText/AppText";
import { Skeleton } from "7shared/ui/Skeleton/Skeleton";

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
    return (
      <div
        className={classNames(s.commentCard, {}, [
          className,
        ])}
      >
        <div className={s.header}>
          {comment?.user?.avatar ? (
            <Avatar size={30} src={comment?.user.avatar} />
          ) : null}
          <AppText
            className={s.username}
            title={comment?.user?.username}
          />
        </div>
        <AppText text={comment?.text} className={s.text} />
      </div>
    );
  }
);
