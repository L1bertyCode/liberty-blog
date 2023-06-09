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
import { HStack } from "@/shared/ui/Stack";
import { AppText } from "@/shared/ui/AppText";
import {
  AppButton,
  AppButtonVariant,
} from "@/shared/ui/AppButton";

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
      <HStack
        fullWidth
        justify="between"
        className={classNames("", {}, [className])}
      >
        <AppText title={t("Профиль")} />
        {canEdit && (
          <div>
            {readonly ? (
              <AppButton
                variant={AppButtonVariant.OUTLINE}
                onClick={onEdit}
                data-testid="EditableProfileCardHeader.EditButton"
              >
                {t("Редактировать")}
              </AppButton>
            ) : (
              <HStack gap="8">
                <AppButton
                  variant={AppButtonVariant.OUTLINE_RED}
                  onClick={onCancelEdit}
                  data-testid="EditableProfileCardHeader.CancelButton"
                >
                  {t("Отменить")}
                </AppButton>
                <AppButton
                  variant={AppButtonVariant.OUTLINE}
                  onClick={onSave}
                  data-testid="EditableProfileCardHeader.SaveButton"
                >
                  {t("Сохранить")}
                </AppButton>
              </HStack>
            )}
          </div>
        )}
      </HStack>
    );
  }
);
