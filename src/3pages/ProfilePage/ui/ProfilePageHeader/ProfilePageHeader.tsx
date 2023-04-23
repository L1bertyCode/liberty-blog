import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./ProfilePageHeader.module.scss";
import { AppText } from "7shared/ui/AppText/AppText";
import {
  AppButton,
  AppButtonVariant,
} from "7shared/ui/AppButton/AppButton";
import { useSelector } from "react-redux";
import {
  getProfileReadOnly,
  profileActions,
  updateProfileData,
} from "6entities/Profile";
import { useAppDispatch } from "7shared/lib/hooks/useAppDispatch";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = memo(
  (props: ProfilePageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const readeOnly = useSelector(getProfileReadOnly);
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
      <div
        className={classNames(s.profilePageHeader, {}, [
          className,
        ])}
      >
        <div className={s.header}>
          <AppText title={t("Profile")} />
          {readeOnly ? (
            <AppButton
              variant={AppButtonVariant.OUTLINE}
              className={s.editBtn}
              onClick={onEdit}
            >
              {t("Edit")}
            </AppButton>
          ) : (
            <div>
              <AppButton
                variant={AppButtonVariant.OUTLINE_RED}
                className={s.cancelBtn}
                onClick={onCancelEdit}
              >
                {t("Cancel")}
              </AppButton>
              <AppButton
                variant={AppButtonVariant.OUTLINE}
                className={s.saveBtn}
                onClick={onSave}
              >
                {t("Save")}
              </AppButton>
            </div>
          )}
        </div>
      </div>
    );
  }
);
