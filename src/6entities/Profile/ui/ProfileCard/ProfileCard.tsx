import { memo } from "react";
import { useTranslation } from "react-i18next";

import { Profile } from "../../model/types/profile";

import {
  AppText,
  AppTextAlign,
  AppTextVariant,
} from "7shared/ui/AppText/AppText";
import {
  AppButton,
  AppButtonVariant,
} from "7shared/ui/AppButton/AppButton";
import { AppInput } from "7shared/ui/AppInput/AppInput";

import { classNames } from "7shared/lib/classNames/classNames";
import s from "./ProfileCard.module.scss";
import { Loader } from "7shared/ui/Loader/Loader";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readOnly?: boolean;
  onChangeFirstname: (value: string) => void;
  onChangeLastname: (value: string) => void;
  onChangeCity: (value: string) => void;
  onChangeAge: (value: string) => void;
}

export const ProfileCard = memo(
  (props: ProfileCardProps) => {
    const {
      className,
      data,
      isLoading,
      error,
      readOnly,
      onChangeFirstname,
      onChangeLastname,
      onChangeCity,
      onChangeAge,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
      return (
        <div
          className={classNames(s.profileCard, {}, [
            className,
            s.loading,
          ])}
        >
          <Loader />
        </div>
      );
    }
    if (error) {
      return (
        <div
          className={classNames(s.profileCard, {}, [
            className,
            s.error,
          ])}
        >
          <AppText
            align={AppTextAlign.CENTER}
            variant={AppTextVariant.ERROR}
            title={t("An unexpected error has occurred")}
            text={t("Reload page")}
          />
        </div>
      );
    }
    return (
      <div
        className={classNames(s.profileCard, {}, [
          className,
        ])}
      >
        <div className={s.data}>
          <AppInput
            value={data?.firstname}
            placeholder={t("Firstname") || ""}
            className={s.input}
            readOnly={readOnly}
            onChange={onChangeFirstname}
          />
          <AppInput
            value={data?.lastname}
            placeholder={t("Lastname") || ""}
            className={s.input}
            readOnly={readOnly}
            onChange={onChangeLastname}
          />
          <AppInput
            value={data?.age}
            placeholder={t("Age") || ""}
            className={s.input}
            readOnly={readOnly}
            onChange={onChangeAge}
            type="number"
          />
          <AppInput
            value={data?.city}
            placeholder={t("City") || ""}
            className={s.input}
            readOnly={readOnly}
            onChange={onChangeCity}
          />
        </div>
      </div>
    );
  }
);
