import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import s from "./SettingsPage.module.scss";
import { memo } from "react";
import { Page } from "@/widgets/Page/Page";
import { UiDesignSwitcher } from "@/features/uiDesignSwitcher";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { AppText } from "@/shared/ui/redesigned/AppText";

interface SettingsPageProps {
  className?: string;
}

const SettingsPage = memo((props: SettingsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page className={classNames(s.settingsPage, {}, [className])}>
      <VStack>
        <AppText text={t("User settings")}/>
        <UiDesignSwitcher />
      </VStack>
    </Page>
  );
});
export default SettingsPage;
