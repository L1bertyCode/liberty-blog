import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { getProfileReadOnly } from "@/features/editableProfileCard/model/selectors/getProfileReadOnly/getProfileReadOnly";
import { getUserAuthData } from "@/entities/User";
import { getProfileData } from "@/features/editableProfileCard/model/selectors/getProfileData/getProfileData";
import { profileActions } from "@/features/editableProfileCard/model/slice/profileSlice";
import { updateProfileData } from "@/features/editableProfileCard/model/services/updateProfileData/updateProfileData";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { AppText as AppTextDeprecated } from "@/shared/ui/deprecated/AppText";
import {
  AppButton as AppButtonDeprecated,
  AppButtonVariant as AppButtonVariantDeprecated,
} from "@/shared/ui/deprecated/AppButton";
import { ToggleFeatures } from "@/shared/lib/features";
import { AppButton } from "@/shared/ui/redesigned/AppButton";
import { AppText } from "@/shared/ui/redesigned/AppText";
import { Card } from "@/shared/ui/redesigned/Card";

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo(
  (props: EditableProfileCardHeaderProps) => {
    const { className } = props;

    const { t } = useTranslation("profile");
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
      dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
      dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
      dispatch(updateProfileData());
    }, [dispatch]);

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card
            fullWidth
            padding="24"
            borderRadius="round_20">
            <HStack
              fullWidth
              justify="between"
              className={classNames("", {}, [className])}>
              <AppText title={t("Профиль")} />
              {canEdit && (
                <div>
                  {readonly ? (
                    <AppButton
                      variant={"outline"}
                      onClick={onEdit}
                      data-testid="EditableProfileCardHeader.EditButton">
                      {t("Редактировать")}
                    </AppButton>
                  ) : (
                    <HStack gap="8">
                      <AppButton
                        variant={"outline"}
                        colorType="error"
                        onClick={onCancelEdit}
                        data-testid="EditableProfileCardHeader.CancelButton">
                        {t("Отменить")}
                      </AppButton>
                      <AppButton
                        variant={"outline"}
                        colorType="succes"
                        onClick={onSave}
                        data-testid="EditableProfileCardHeader.SaveButton">
                        {t("Сохранить")}
                      </AppButton>
                    </HStack>
                  )}
                </div>
              )}
            </HStack>
          </Card>
        }
        off={
          <HStack
            fullWidth
            justify="between"
            className={classNames("", {}, [className])}>
            <AppTextDeprecated title={t("Профиль")} />
            {canEdit && (
              <div>
                {readonly ? (
                  <AppButtonDeprecated
                    variant={AppButtonVariantDeprecated.OUTLINE}
                    onClick={onEdit}
                    data-testid="EditableProfileCardHeader.EditButton">
                    {t("Редактировать")}
                  </AppButtonDeprecated>
                ) : (
                  <HStack gap="8">
                    <AppButtonDeprecated
                      variant={AppButtonVariantDeprecated.OUTLINE_RED}
                      onClick={onCancelEdit}
                      data-testid="EditableProfileCardHeader.CancelButton">
                      {t("Отменить")}
                    </AppButtonDeprecated>
                    <AppButtonDeprecated
                      variant={AppButtonVariantDeprecated.OUTLINE}
                      onClick={onSave}
                      data-testid="EditableProfileCardHeader.SaveButton">
                      {t("Сохранить")}
                    </AppButtonDeprecated>
                  </HStack>
                )}
              </div>
            )}
          </HStack>
        }
      />
    );
  },
);
