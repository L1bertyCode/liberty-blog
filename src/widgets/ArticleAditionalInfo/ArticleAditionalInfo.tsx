import { memo } from "react";
import { useTranslation } from "react-i18next";

import { User } from "@/entities/User";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { Avatar } from "@/shared/ui/redesigned/Avatar";
import { AppText } from "@/shared/ui/redesigned/AppText";
import { AppButton } from "@/shared/ui/redesigned/AppButton";

interface ArticleAditionalInfoProps {
  className?: string;
  author: User;
  createdAt: string;
  views: number;
  onEdit: () => void;
}

export const ArticleAditionalInfo = memo((props: ArticleAditionalInfoProps) => {
  const { className, author, createdAt, views, onEdit } = props;
  const { t } = useTranslation();
  return (
    <VStack
      gap="32"
      className={className}>
      <HStack gap="8">
        <Avatar
          src={author.avatar}
          size={32}
        />
        <AppText
          text={author.username}
          bold
        />
        <AppText text={createdAt} />
      </HStack>
      <AppButton onClick={onEdit}>{t("Edit")}</AppButton>
      <AppText text={t("{{count}} просмотров_zero", { count: views })} />
    </VStack>
  );
});
