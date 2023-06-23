import { memo } from "react";
import { useTranslation } from "react-i18next";

import { Profile } from "../../model/types/profile";

import {
  AppText as AppTextDeprecated,
  AppTextAlign as AppTextAlignDeprecated,
  AppTextVariant as AppTextVariantDeprecated,
} from "@/shared/ui/deprecated/AppText";

import { AppInput as AppInputDeprecated } from "@/shared/ui/deprecated/AppInput";

import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import s from "./ProfileCard.module.scss";
import { Loader } from "@/shared/ui/deprecated/Loader";
import { Avatar as AvatarDeprecated } from "@/shared/ui/deprecated/Avatar";
import { Avatar } from "@/shared/ui/redesigned/Avatar";

import { Currency, CurrencySelect } from "@/entities/Currency";
import { Country, CountrySelect } from "@/entities/Country";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { ToggleFeatures } from "@/shared/lib/features";
import { AppInput } from "@/shared/ui/redesigned/AppInput";
import { AppText } from "@/shared/ui/redesigned/AppText";
import { Card } from "@/shared/ui/redesigned/Card";

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

export const ProfileCard = memo((props: ProfileCardProps) => {
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
        className={classNames(s.profileCard, {}, [className, s.loading])}>
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
        className={classNames(s.profileCard, {}, [className, s.error])}>
        <AppTextDeprecated
          align={AppTextAlignDeprecated.CENTER}
          variant={AppTextVariantDeprecated.ERROR}
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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card
          padding="24"
          fullWidth
          className={classNames(s.profileCardRedesigned, {}, [className])}>
          <VStack gap="32">
            {data?.avatar && (
              <HStack
                justify="center"
                fullWidth>
                <Avatar
                  size={128}
                  src={data?.avatar}
                />
              </HStack>
            )}

            <HStack
              gap="24"
              fullWidth>
              <VStack
                gap="16"
                fullWidth>
                <AppInput
                  value={data?.firstname}
                  label={t("Firstname") || ""}
                  className={s.input}
                  readOnly={readOnly}
                  onChange={onChangeFirstname}
                  data-testid={"ProfileCard.firstname"}
                />
                <AppInput
                  value={data?.lastname}
                  label={t("Lastname") || ""}
                  className={s.input}
                  readOnly={readOnly}
                  onChange={onChangeLastname}
                  data-testid={"ProfileCard.lastname"}
                />
                <AppInput
                  value={data?.age}
                  label={t("Age") || ""}
                  className={s.input}
                  readOnly={readOnly}
                  onChange={onChangeAge}
                  type="number"
                />
                <AppInput
                  value={data?.city}
                  label={t("City") || ""}
                  className={s.input}
                  readOnly={readOnly}
                  onChange={onChangeCity}
                />
              </VStack>
              <VStack
                gap="16"
                fullWidth>
                <AppInput
                  value={data?.username}
                  label={t("Username") || ""}
                  className={s.input}
                  readOnly={readOnly}
                  onChange={onChangeUsername}
                />
                <AppInput
                  value={data?.avatar}
                  label={t("Avatar") || ""}
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
            </HStack>
          </VStack>
        </Card>
      }
      off={
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
      }
    />
  );
});
