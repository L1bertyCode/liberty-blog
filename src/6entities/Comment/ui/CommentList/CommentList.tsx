import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./CommentList.module.scss";
import { Comment } from "6entities/Comment/model/types/comment";
import { AppText } from "7shared/ui/AppText/AppText";
import { CommentCard } from "../CommentCard/CommentCard";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(
  (props: CommentListProps) => {
    const { className, comments, isLoading } = props;

    const { t } = useTranslation();
    return (
      <div
        className={classNames(s.commentList, {}, [
          className,
        ])}
      >
        <div>CommentList</div>
        {comments?.length ? (
          comments.map((comment) => (
            <CommentCard
              isLoading={isLoading}
              comment={comment}
              className={s.comment}
              key={comment.id}
            />
          ))
        ) : (
          <AppText text={t("No comments")} />
        )}
      </div>
    );
  }
);
