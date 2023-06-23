import { memo } from "react";
import { useTranslation } from "react-i18next";

import {
  AppText as AppTextDeprecated,
  AppTextAlign as AppTextAlignDeprecated,
  AppTextVariant as AppTextVariantDeprecated,
} from "@/shared/ui/deprecated/AppText";

import { AppInput as AppInputDeprecated } from "@/shared/ui/deprecated/AppInput";

import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import s from "../ProfileCard/ProfileCard.module.scss";
import { Loader } from "@/shared/ui/deprecated/Loader";
import { Avatar as AvatarDeprecated } from "@/shared/ui/deprecated/Avatar";

import { CurrencySelect } from "@/entities/Currency";
import { CountrySelect } from "@/entities/Country";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";

import { ProfileCardProps } from "../ProfileCard/ProfileCard";

export const ProfileCardDeprecatedLaoder = () => {
  return (
    <HStack
      justify="center"
      fullWidth
      gap={"8"}
      className={classNames(s.profileCard, {}, [s.loading])}>
      <Loader />
    </HStack>
  );
};
export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation();
  return (
    <HStack
      justify="center"
      align="center"
      fullWidth
      gap={"8"}
      className={classNames(s.profileCard, {}, [, s.error])}>
      <AppTextDeprecated
        align={AppTextAlignDeprecated.CENTER}
        variant={AppTextVariantDeprecated.ERROR}
        title={t("An unexpected error has occurred")}
        text={t("Reload page")}
      />
    </HStack>
  );
};

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
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

  const mods: Mods = {
    [s.editing]: !readOnly,
  };
  return (
    <VStack
      fullWidth
      gap={"16"}
      className={classNames(s.profileCard, mods, [className])}>
      {data?.avatar && (
        <HStack
          justify="center"
          fullWidth>
          <AvatarDeprecated src={data?.avatar} />
        </HStack>
      )}
      <AppInputDeprecated
        value={data?.firstname}
        placeholder={t("Firstname") || ""}
        className={s.input}
        readOnly={readOnly}
        onChange={onChangeFirstname}
        data-testid={"ProfileCard.firstname"}
      />
      <AppInputDeprecated
        value={data?.lastname}
        placeholder={t("Lastname") || ""}
        className={s.input}
        readOnly={readOnly}
        onChange={onChangeLastname}
        data-testid={"ProfileCard.lastname"}
      />
      <AppInputDeprecated
        value={data?.age}
        placeholder={t("Age") || ""}
        className={s.input}
        readOnly={readOnly}
        onChange={onChangeAge}
        type="number"
      />
      <AppInputDeprecated
        value={data?.city}
        placeholder={t("City") || ""}
        className={s.input}
        readOnly={readOnly}
        onChange={onChangeCity}
      />
      <AppInputDeprecated
        value={data?.username}
        placeholder={t("Username") || ""}
        className={s.input}
        readOnly={readOnly}
        onChange={onChangeUsername}
      />
      <AppInputDeprecated
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
});
