import { useTranslation } from "react-i18next";
import { memo, useEffect, useState } from "react";

import { Modal } from "@/shared/ui/deprecated/Modal";
import { AppText } from "@/shared/ui/deprecated/AppText";
import { saveJsonSettings, useJsonSettings } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { isMobile } from "react-device-detect";
import { Drawer } from "@/shared/ui/deprecated/Drawer";

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { isArticlePageWasOpened } = useJsonSettings();
  useEffect(() => {
    if (!isArticlePageWasOpened) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlePageWasOpened: true }));
    }
  }, [dispatch, isArticlePageWasOpened]);
  const onClose = () => setIsOpen(false);

  const text = (
    <AppText
      title={t("Welcome to article page")}
      text={t("Here you can search and view articles on various topics")}
    />
  );
  if (isMobile) {
    return <Drawer>{text}</Drawer>;
  }
  return (
    <Modal
      lazy
      isOpen={isOpen}
      onClose={onClose}>
      {text}
    </Modal>
  );
});
