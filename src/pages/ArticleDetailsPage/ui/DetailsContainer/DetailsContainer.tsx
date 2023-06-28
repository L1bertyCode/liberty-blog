import { memo } from "react";
import { useTranslation } from "react-i18next";

import { ArticleDetails } from "@/entities/Article/ui/ArticleDetails/ArticleDetails";
import { Card } from "@/shared/ui/redesigned/Card";

interface DetailsContainerProps {
  id: string;
  className?: string;
}

export const DetailsContainer = memo((props: DetailsContainerProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  return (
    <Card
      borderRadius="round_40"
      fullWidth
      className={className}>
      <ArticleDetails id={id} />
    </Card>
  );
});
