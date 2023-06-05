import { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./ProfilePage.module.scss";

import { Page } from "@/widgets/Page/Page";
import { VStack } from "@/shared/ui/Stack";
import { EditableProfileCard } from "@/features/editableProfileCard";
import { useParams } from "react-router-dom";
import { AppText } from "@/shared/ui/AppText";

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <AppText text={t("Profile not found")} />;
  }
  return (
    <Page
      className={classNames(s.profilePage, {}, [className])}
    >
      <VStack gap={"16"} fullWidth>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
});
export default ProfilePage;
