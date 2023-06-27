import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./RatingCard.module.scss";
import { Card as CardDeprecated } from "@/shared/ui/deprecated/Card";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { AppText as AppTextDeprecated } from "@/shared/ui/deprecated/AppText";
import { StarRating } from "@/shared/ui/redesigned/StarRating";
import { Modal } from "@/shared/ui/redesigned/Modal";
import { AppInput as AppInputDeprecated } from "@/shared/ui/deprecated/AppInput";
import { DefaultTFuncReturn } from "i18next";
import {
  AppButton as AppButtonDeprecated,
  AppButtonSize as AppButtonSizeDeprecated,
  AppButtonVariant as AppButtonVariantDeprecated,
} from "@/shared/ui/deprecated/AppButton";
import { BrowserView, MobileView } from "react-device-detect";
import { Drawer } from "@/shared/ui/redesigned/Drawer";
import { ToggleFeatures } from "@/shared/lib/features";
import { Card } from "@/shared/ui/redesigned/Card";
import { AppText } from "@/shared/ui/redesigned/AppText";
import { AppButton } from "@/shared/ui/redesigned/AppButton";
import { AppInput } from "@/shared/ui/redesigned/AppInput";

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
    [hasFeedback, onAccept],
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
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <>
            <AppText title={feedbackTitle} />
            <AppInput
              data-testid={"RatingCard.Input"}
              value={feedback}
              onChange={setFeddback}
              placeholder={t("Your feedback") || ""}
            />
          </>
        }
        off={
          <>
            <AppTextDeprecated title={feedbackTitle} />
            <AppInputDeprecated
              data-testid={"RatingCard.Input"}
              value={feedback}
              onChange={setFeddback}
              placeholder={t("Your feedback") || ""}
            />
          </>
        }
      />
    </>
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card
          data-testid={"RatingCard"}
          className={classNames(s.ratingCard, {}, [className])}
          fullWidth
          border="round">
          <VStack
            align="center"
            gap="8">
            <AppText title={starsCount ? t("Thank you for rating") : title} />
            <StarRating
              selectedStars={starsCount}
              size={50}
              onSelect={onSelectStars}
            />
          </VStack>
          <BrowserView>
            <Modal
              isOpen={isModalOpen}
              lazy>
              <VStack
                gap="32"
                fullWidth>
                {modalContent}
                <HStack
                  gap="16"
                  justify={"end"}
                  fullWidth>
                  <AppButton
                    data-testid={"RatingCard.Close"}
                    onClick={cancelHandle}
                    variant={"outline"}>
                    {t("Close")}
                  </AppButton>
                  <AppButton
                    data-testid={"RatingCard.Send"}
                    onClick={acceptHandle}>
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
              onClose={cancelHandle}>
              <VStack
                gap="32"
                justify="end">
                {modalContent}
                <AppButton
                  onClick={acceptHandle}
                  size={"l"}
                  fullWidth>
                  {t("Send")}
                </AppButton>
                StarRating{" "}
              </VStack>
            </Drawer>
          </MobileView>
        </Card>
      }
      off={
        <CardDeprecated
          data-testid={"RatingCard"}
          className={classNames(s.ratingCard, {}, [className])}
          fullWidth>
          <VStack
            align="center"
            gap="8">
            <AppTextDeprecated
              title={starsCount ? t("Thank you for rating") : title}
            />
            <StarRating
              selectedStars={starsCount}
              size={50}
              onSelect={onSelectStars}
            />
          </VStack>
          <BrowserView>
            <Modal
              isOpen={isModalOpen}
              lazy>
              <VStack
                gap="32"
                fullWidth>
                {modalContent}
                <HStack
                  gap="16"
                  justify={"end"}
                  fullWidth>
                  <AppButtonDeprecated
                    data-testid={"RatingCard.Close"}
                    onClick={cancelHandle}
                    variant={AppButtonVariantDeprecated.OUTLINE_RED}>
                    {t("Close")}
                  </AppButtonDeprecated>
                  <AppButtonDeprecated
                    data-testid={"RatingCard.Send"}
                    onClick={acceptHandle}>
                    {t("Send")}
                  </AppButtonDeprecated>
                </HStack>
              </VStack>
            </Modal>
          </BrowserView>
          <MobileView>
            <Drawer
              isOpen={isModalOpen}
              lazy
              onClose={cancelHandle}>
              <VStack
                gap="32"
                justify="end">
                {modalContent}
                <AppButtonDeprecated
                  onClick={acceptHandle}
                  size={AppButtonSizeDeprecated.L}
                  fullWidth>
                  {t("Send")}
                </AppButtonDeprecated>
              </VStack>
            </Drawer>
          </MobileView>
        </CardDeprecated>
      }
    />
  );
});
