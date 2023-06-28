import { memo } from "react";
import { useTranslation } from "react-i18next";

import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import s from "../ProfileCard/ProfileCard.module.scss";

import { Avatar } from "@/shared/ui/redesigned/Avatar";

import { CurrencySelect } from "@/entities/Currency";
import { CountrySelect } from "@/entities/Country";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";

import { AppInput } from "@/shared/ui/redesigned/AppInput";
import { AppText } from "@/shared/ui/redesigned/AppText";
import { Card } from "@/shared/ui/redesigned/Card";

import { ProfileCardProps } from "../ProfileCard/ProfileCard";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation();
  return (
    <HStack
      justify="center"
      align="center"
      fullWidth
      gap={"8"}
      className={classNames(s.profileCard, {}, [, s.error])}>
      <AppText
        align={"center"}
        variant={"error"}
        title={t("An unexpected error has occurred")}
        text={t("Reload page")}
      />
    </HStack>
  );
};
export const ProfileCardRedesignedSkeleton = () => {
  return (
    <Card
      padding="24"
      fullWidth>
      <VStack gap="32">
        <HStack
          fullWidth
          justify="center">
          <Skeleton
            border={"100%"}
            height={"128px"}
            width={"128px"}
          />
        </HStack>
        <HStack
          gap="32"
          fullWidth>
          <VStack
            gap="16"
            fullWidth>
            <Skeleton
              width={"100%"}
              height={"38px"}
              border={"25px"}
            />
            <Skeleton
              width={"100%"}
              border={"25px"}
              height={"38px"}
            />
            <Skeleton
              width={"100%"}
              border={"25px"}
              height={"38px"}
            />
            <Skeleton
              width={"100%"}
              border={"25px"}
              height={"38px"}
            />
          </VStack>
          <VStack
            gap="16"
            fullWidth>
            <Skeleton
              width={"100%"}
              border={"25px"}
              height={"38px"}
            />
            <Skeleton
              width={"100%"}
              border={"25px"}
              height={"38px"}
            />
            <Skeleton
              width={"100%"}
              border={"25px"}
              height={"38px"}
            />
            <Skeleton
              width={"100%"}
              border={"25px"}
              height={"38px"}
            />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
};

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
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
    <Card
      borderRadius="round_20"
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
  );
});
