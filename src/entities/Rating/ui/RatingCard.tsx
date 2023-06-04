import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./RatingCard.module.scss";
import { Card } from "@/shared/ui/Card/Card";
import { HStack, VStack } from "@/shared/ui/Stack";
import { AppText } from "@/shared/ui/AppText/AppText";
import { StarRating } from "@/shared/ui/StarRating/StarRating";
import { Modal } from "@/shared/ui/Modal/Modal";
import { AppInput } from "@/shared/ui/AppInput/AppInput";
import { DefaultTFuncReturn } from "i18next";
import {
  AppButton,
  AppButtonSize,
  AppButtonVariant,
} from "@/shared/ui/AppButton/AppButton";
import {
  BrowserView,
  MobileView,
} from "react-device-detect";
import { Drawer } from "@/shared/ui/Drawer/Drawer";

interface RatingCardProps {
  className?: string;
  title?: string | DefaultTFuncReturn;
  hasFeedback?: boolean;
  feedbackTitle?: string | DefaultTFuncReturn;
  onCancel?: (starCount: number) => void;
  onAccept?: (starCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback = true,
    onCancel,
    onAccept,
    rate = 0,
  } = props;
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeddback] = useState("");

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);

      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept]
  );
  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <>
      <AppText title={feedbackTitle} />
      <AppInput
        value={feedback}
        onChange={setFeddback}
        placeholder={t("Your feedback") || ""}
      />
    </>
  );
  return (
    <Card
      className={classNames(s.ratingCard, {}, [className])}
      fullWidth
    >
      <VStack align="center" gap="8">
        <AppText title={starsCount?t("Thank you for rating") :title} />
        <StarRating
          selectedStars={starsCount}
          size={50}
          onSelect={onSelectStars}
        />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack gap="32" fullWidth>
            {modalContent}
            <HStack gap="16" justify={"end"} fullWidth>
              <AppButton
                onClick={cancelHandle}
                variant={AppButtonVariant.OUTLINE_RED}
              >
                {t("Close")}
              </AppButton>
              <AppButton onClick={acceptHandle}>
                {t("Send")}
              </AppButton>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer
          isOpen={isModalOpen}
          lazy
          onClose={cancelHandle}
        >
          <VStack gap="32" justify="end">
            {modalContent}
            <AppButton
              onClick={acceptHandle}
              size={AppButtonSize.L}
              fullWidth
            >
              {t("Send")}
            </AppButton>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  );
});
