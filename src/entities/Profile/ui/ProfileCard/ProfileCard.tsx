import { memo } from "react";
import { useTranslation } from "react-i18next";

import { Profile } from "../../model/types/profile";

import {
  AppText,
  AppTextAlign,
  AppTextVariant,
} from "@/shared/ui/AppText/AppText";

import { AppInput } from "@/shared/ui/AppInput/AppInput";

import {
  Mods,
  classNames,
} from "@/shared/lib/classNames/classNames";
import s from "./ProfileCard.module.scss";
import { Loader } from "@/shared/ui/Loader/Loader";
import { Avatar } from "@/shared/ui/Avatar/Avatar";

import {
  Currency,
  CurrencySelect,
} from "@/entities/Currency";
import { Country, CountrySelect } from "@/entities/Country";
import { HStack, VStack } from "@/shared/ui/Stack";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readOnly?: boolean;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
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
      onChangeAvatar,
      onChangeUsername,
      onChangeCurrency,
      onChangeCountry,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
      return (
        <HStack
          justify="center"
          fullWidth
          gap={"8"}
          className={classNames(s.profileCard, {}, [
            className,
            s.loading,
          ])}
        >
          <Loader />
        </HStack>
      );
    }
    if (error) {
      return (
        <HStack
          justify="center"
          align="center"
          fullWidth
          gap={"8"}
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
        </HStack>
      );
    }
    const mods: Mods = {
      [s.editing]: !readOnly,
    };
    return (
      <VStack
        fullWidth
        gap={"16"}
        className={classNames(s.profileCard, mods, [
          className,
        ])}
      >
        {data?.avatar && (
          <HStack justify="center" fullWidth>
            <Avatar src={data?.avatar} />
          </HStack>
        )}
        <AppInput
          value={data?.firstname}
          placeholder={t("Firstname") || ""}
          className={s.input}
          readOnly={readOnly}
          onChange={onChangeFirstname}
          data-testid={"ProfileCard.firstname"}
        />
        <AppInput
          value={data?.lastname}
          placeholder={t("Lastname") || ""}
          className={s.input}
          readOnly={readOnly}
          onChange={onChangeLastname}
          data-testid={"ProfileCard.lastname"}
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
        <AppInput
          value={data?.username}
          placeholder={t("Username") || ""}
          className={s.input}
          readOnly={readOnly}
          onChange={onChangeUsername}
        />
        <AppInput
          value={data?.avatar}
          placeholder={t("Avatar") || ""}
          className={s.input}
          readOnly={readOnly}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          className={s.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readOnly={readOnly}
        />
        <CountrySelect
          className={s.input}
          value={data?.country}
          onChange={onChangeCountry}
          readOnly={readOnly}
        />
      </VStack>
    );
  }
);
