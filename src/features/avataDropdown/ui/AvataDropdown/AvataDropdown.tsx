import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./AvataDropdown.module.scss";
import { Dropdown } from "@/shared/ui/Popups";

import { useSelector } from "react-redux";
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { Avatar } from "@/shared/ui/Avatar";
import { getRouteAdmin, getRouteProfile } from "@/shared/const/router";

interface AvataDropdownProps {
  className?: string;
}

export const AvataDropdown = memo((props: AvataDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);

  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvalible = isAdmin || isManager;
  if (!authData) {
    return null;
  }
  return (
    <Dropdown
      className={classNames(s.avataDropdown, {}, [className])}
      direction="bottom left"
      items={[
        ...(isAdminPanelAvalible
          ? [
              {
                content: t("Admin") || "",
                href: getRouteAdmin(),
              },
            ]
          : []),
        {
          content: t("Profile") || "",
          href: getRouteProfile(authData.id),
        },
        {
          content: t("Logout") || "",
          onClick: onLogout,
        },
      ]}
      trigger={
        <Avatar
          src={authData.avatar}
          size={30}
        />
      }
    />
  );
});
