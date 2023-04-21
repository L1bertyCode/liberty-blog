import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  ProfileCard,
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  profileReducer,
} from "6entities/Profile";

import {
  DynamicModuleLoader,
  ReducersList,
} from "7shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { useAppDispatch } from "7shared/lib/hooks/useAppDispatch";

import { classNames } from "7shared/lib/classNames/classNames";
import s from "./ProfilePage.module.scss";

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

  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

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
        <ProfileCard
          data={data}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </DynamicModuleLoader>
  );
});
export default ProfilePage;
