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
import {
  ProfileCardDeprecated,
  ProfileCardDeprecatedError,
  ProfileCardDeprecatedLaoder,
} from "../ProfileCardDeprecated/ProfileCardDeprecated";
import {
  ProfileCardRedesigned,
  ProfileCardRedesignedError,
  ProfileCardRedesignedSkeleton,
} from "../ProfileCardRedesigned/ProfileCardRedesigned";

export interface ProfileCardProps {
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
  const { className, isLoading, error } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<ProfileCardRedesignedSkeleton />}
        off={<ProfileCardDeprecatedLaoder />}
      />
    );
  }
  if (error) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<ProfileCardRedesignedError />}
        off={<ProfileCardDeprecatedError />}
      />
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ProfileCardRedesigned {...props} />}
      off={<ProfileCardDeprecated {...props} />}
    />
  );
});
