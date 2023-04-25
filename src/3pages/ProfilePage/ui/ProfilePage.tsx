import { memo, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  ProfileCard,
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileErrorValidateErrors,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadOnly,
  profileActions,
  profileReducer,
} from "6entities/Profile";

import {
  DynamicModuleLoader,
  ReducersList,
} from "7shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { useAppDispatch } from "7shared/lib/hooks/useAppDispatch";

import { classNames } from "7shared/lib/classNames/classNames";
import s from "./ProfilePage.module.scss";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { Currency } from "6entities/Currency";
import { Country } from "6entities/Country";
import {
  AppText,
  AppTextVariant,
} from "7shared/ui/AppText/AppText";
import { ValidateProfileError } from "6entities/Profile/model/types/profile";

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};
const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props;
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
    [ValidateProfileError.NO_DATA]: t("Data not specified"),
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
  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <div
        className={classNames(s.profilePage, {}, [
          className,
        ])}
      >
        <div>{t("Profile")}</div>
        <ProfilePageHeader />

        {validateErrors?.length &&
          validateErrors.map((err) => {
            return (
              <AppText
                key={err}
                variant={AppTextVariant.ERROR}
                text={validateErrorTranslates[err]}
              />
            );
          })}

        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeCity={onChangeCity}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readOnly={readOnly}
        />
      </div>
    </DynamicModuleLoader>
  );
});
export default ProfilePage;
