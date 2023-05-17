import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import { Comment } from "6entities/Comment/model/types/comment";
import { AppText } from "7shared/ui/AppText/AppText";
import { CommentCard } from "../CommentCard/CommentCard";
import { VStack } from "7shared/ui/Stack";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(
  (props: CommentListProps) => {
    const { className, comments, isLoading } = props;

    const { t } = useTranslation();
    if (isLoading) {
      return (
        <VStack
          gap="16"
          max
          className={classNames("", {}, [className])}
        >
          <CommentCard isLoading />
          <CommentCard isLoading />
          <CommentCard isLoading />
        </VStack>
      );
    }
    return (
      <VStack
        gap="16"
        max
        className={classNames("", {}, [className])}
      >
        {comments?.length ? (
          comments.map((comment) => (
            <CommentCard
              isLoading={isLoading}
              comment={comment}
              key={comment.id}
            />
          ))
        ) : (
          <AppText text={t("No comments")} />
        )}
      </VStack>
    );
  }
);
