import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

import s from "./EditableProfileCardHeader.module.scss";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { getProfileReadOnly } from "features/editableProfileCard/model/selectors/getProfileReadOnly/getProfileReadOnly";
import { getUserAuthData } from "entities/User";
import { getProfileData } from "features/editableProfileCard/model/selectors/getProfileData/getProfileData";
import { profileActions } from "features/editableProfileCard/model/slice/profileSlice";
import { updateProfileData } from "features/editableProfileCard/model/services/updateProfileData/updateProfileData";
import { HStack } from "shared/ui/Stack";
import { AppText } from "shared/ui/AppText/AppText";
import { AppButton, AppButtonVariant } from "shared/ui/AppButton/AppButton";

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo(
  (props: EditableProfileCardHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const readeOnly = useSelector(getProfileReadOnly);
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

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
        className={classNames(
          s.editableProfileCardHeader,
          {},
          [className]
        )}
        max
        justify={"between"}
        gap="8"
      >
        <AppText title={t("Profile")} />

        <div>
          {canEdit && (
            <>
              {readeOnly ? (
                <AppButton
                  variant={AppButtonVariant.OUTLINE}
                  onClick={onEdit}
                >
                  {t("Edit")}
                </AppButton>
              ) : (
                <HStack gap={"8"} max>
                  <AppButton
                    variant={AppButtonVariant.OUTLINE_RED}
                    onClick={onCancelEdit}
                  >
                    {t("Cancel")}
                  </AppButton>
                  <AppButton
                    variant={AppButtonVariant.OUTLINE}
                    onClick={onSave}
                  >
                    {t("Save")}
                  </AppButton>
                </HStack>
              )}
            </>
          )}
        </div>
      </HStack>
    );
  }
);
