import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

import { AppText } from "shared/ui/AppText/AppText";
import {
  AppButton,
  AppButtonVariant,
} from "shared/ui/AppButton/AppButton";
import { useSelector } from "react-redux";
import {
  getProfileData,
  getProfileReadOnly,
  profileActions,
  updateProfileData,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { getUserAuthData } from "entities/User";
import { HStack } from "shared/ui/Stack/HStack/HStack";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = memo(
  (props: ProfilePageHeaderProps) => {
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
        className={classNames("", {}, [className])}
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
