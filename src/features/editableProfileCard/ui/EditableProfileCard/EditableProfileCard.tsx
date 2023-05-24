import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { getProfileErrorValidateErrors } from "../../model/selectors/getProfileErrorValidateErrors/getProfileErrorValidateErrors";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";

import {
  AppText,
  AppTextVariant,
} from "shared/ui/AppText/AppText";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileReadOnly } from "../../model/selectors/getProfileReadOnly/getProfileReadOnly";

import {
  profileActions,
  profileReducer,
} from "../../model/slice/profileSlice";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";
import { ValidateProfileError } from "../../model/types/editableProfileCardSchema";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { ProfileCard } from "entities/Profile";

import { VStack } from "shared/ui/Stack";
import { EditableProfileCardHeader } from "../EditableProfileCardHeader/EditableProfileCardHeader";

interface EditableProfileCardProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard = memo(
  (props: EditableProfileCardProps) => {
    const { id, className } = props;
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const validateErrors = useSelector(
      getProfileErrorValidateErrors
    );
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readOnly = useSelector(getProfileReadOnly);

    const validateErrorTranslates = {
      [ValidateProfileError.SERVER_ERROR]: t(
        "Server error on save"
      ),
      [ValidateProfileError.INCORRECT_COUNTRY]: t(
        "Incorrect region"
      ),
      [ValidateProfileError.NO_DATA]: t(
        "Data not specified"
      ),
      [ValidateProfileError.INCORRECT_USER_DATA]: t(
        "First and last name are required"
      ),
      [ValidateProfileError.INCORRECT_AGE]:
        t("Incorrect age"),
    };

    const onChangeFirstname = useCallback(
      (value?: string) => {
        dispatch(
          profileActions.updateProfile({
            firstname: value || "",
          })
        );
      },
      [dispatch]
    );
    const onChangeLastname = useCallback(
      (value?: string) => {
        dispatch(
          profileActions.updateProfile({
            lastname: value || "",
          })
        );
      },
      [dispatch]
    );
    const onChangeCity = useCallback(
      (value?: string) => {
        dispatch(
          profileActions.updateProfile({
            city: value || "",
          })
        );
      },
      [dispatch]
    );
    const onChangeAge = useCallback(
      (value?: string) => {
        dispatch(
          profileActions.updateProfile({
            age: Number(value || 0),
          })
        );
      },
      [dispatch]
    );
    const onChangeUsername = useCallback(
      (value?: string) => {
        dispatch(
          profileActions.updateProfile({
            username: value || "",
          })
        );
      },
      [dispatch]
    );
    const onChangeAvatar = useCallback(
      (value?: string) => {
        dispatch(
          profileActions.updateProfile({
            avatar: value || "",
          })
        );
      },
      [dispatch]
    );
    const onChangeCurrency = useCallback(
      (currency?: Currency) => {
        dispatch(
          profileActions.updateProfile({
            currency: currency,
          })
        );
      },
      [dispatch]
    );
    const onChangeCountry = useCallback(
      (country?: Country) => {
        dispatch(
          profileActions.updateProfile({
            country: country,
          })
        );
      },
      [dispatch]
    );
    useInitialEffect(() => {
      if (id) {
        dispatch(fetchProfileData(id));
      }
    });

    return (
      <DynamicModuleLoader reducers={reducers}>
        <VStack
          gap="8"
          max
          className={classNames("", {}, [className])}
        >
          <EditableProfileCardHeader />
          {validateErrors?.length &&
            validateErrors.map((err) => (
              <AppText
                key={err}
                variant={AppTextVariant.ERROR}
                text={validateErrorTranslates[err]}
                data-testid="EditableProfileCard.Error"
              />
            ))}
          <ProfileCard
            data={formData}
            isLoading={isLoading}
            error={error}
            readOnly={readOnly}
            onChangeFirstname={onChangeFirstname}
            onChangeLastname={onChangeLastname}
            onChangeAge={onChangeAge}
            onChangeCity={onChangeCity}
            onChangeUsername={onChangeUsername}
            onChangeAvatar={onChangeAvatar}
            onChangeCurrency={onChangeCurrency}
            onChangeCountry={onChangeCountry}
          />
        </VStack>
      </DynamicModuleLoader>
    );
  }
);
