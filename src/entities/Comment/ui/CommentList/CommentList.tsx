import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import { Comment } from "@/entities/Comment/model/types/comment";
import { AppText as AppTextDeprecater } from "@/shared/ui/deprecated/AppText";
import { CommentCard } from "../CommentCard/CommentCard";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { ToggleFeatures } from "@/shared/lib/features";
import { AppText } from "@/shared/ui/redesigned/AppText";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props;

  const { t } = useTranslation();
  if (isLoading) {
    return (
      <VStack
        gap="16"
        fullWidth
        className={classNames("", {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }
  return (
    <VStack
      gap="16"
      fullWidth
      className={classNames("", {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            isLoading={isLoading}
            comment={comment}
            key={comment.id}
          />
        ))
      ) : (
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<AppText text={t("No comments")} />}
          off={<AppTextDeprecater text={t("No comments")} />}
        />
      )}
    </VStack>
  );
});
