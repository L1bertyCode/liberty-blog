import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./ProfileCard.module.scss";
import { useSelector } from "react-redux";
import { getProfileData } from "6entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileError } from "6entities/Profile/model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "6entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { AppText } from "7shared/ui/AppText/AppText";
import {
  AppButton,
  AppButtonVariant,
} from "7shared/ui/AppButton/AppButton";
import { AppInput } from "7shared/ui/AppInput/AppInput";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = memo(
  (props: ProfileCardProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoaing = useSelector(getProfileIsLoading);
    return (
      <div
        className={classNames(s.profileCard, {}, [
          className,
        ])}
      >
        <div className={s.header}>
          <AppText title={t("Profile")} />
          <AppButton variant={AppButtonVariant.OUTLINE}
          className={s.editBtn}>
            {t("Edit")}
          </AppButton>
        </div>
        <div className={s.data}>
          <AppInput
            value={data?.firstname}
            placeholder={t("Firstname")}
            className={s.input}
          />
          <AppInput
            value={data?.lastname}
            placeholder={t("Lastname")}
            className={s.input}
          />
        </div>
      </div>
    );
  }
);
