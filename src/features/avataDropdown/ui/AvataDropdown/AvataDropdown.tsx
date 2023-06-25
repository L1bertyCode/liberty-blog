import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./AvataDropdown.module.scss";
import { Dropdown as DropdownDepracated } from "@/shared/ui/deprecated/Popups";

import { useSelector } from "react-redux";
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { Avatar as AvatarDepracated } from "@/shared/ui/deprecated/Avatar";
import {
  getRouteAdmin,
  getRouteProfile,
  getRouteSettings,
} from "@/shared/const/router";
import { ToggleFeatures } from "@/shared/lib/features";
import { Dropdown } from "@/shared/ui/redesigned/Popups";
import { Avatar } from "@/shared/ui/redesigned/Avatar";

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
  if (!authData) {
    return null;
  }
  const isAdminPanelAvalible = isAdmin || isManager;
  const items = [
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
      content: t("Settings") || "",
      href: getRouteSettings(),
    },
    {
      content: t("Logout") || "",
      onClick: onLogout,
    },
  ];

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Dropdown
          className={classNames(s.avataDropdown, {}, [className])}
          direction="bottom left"
          items={items}
          trigger={
            <Avatar
              src={authData.avatar}
              size={30}
            />
          }
        />
      }
      off={
        <DropdownDepracated
          className={classNames(s.avataDropdown, {}, [className])}
          direction="bottom left"
          items={items}
          trigger={
            <AvatarDepracated
              src={authData.avatar}
              size={30}
            />
          }
        />
      }
    />
  );
});
