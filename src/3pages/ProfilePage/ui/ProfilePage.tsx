import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./ProfilePage.module.scss";
import {
  DynamicModuleLoader,
  ReducersList,
} from "7shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  ProfileCard,
  fetchProfileData,
  profileReducer,
} from "6entities/Profile";
import { useAppDispatch } from "7shared/lib/hooks/useAppDispatch";

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
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
});
export default ProfilePage;
