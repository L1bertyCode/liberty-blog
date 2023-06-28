import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import s from "./UiDesignSwitcher.module.scss";
import { memo, useState } from "react";
import { Listbox } from "@/shared/ui/redesigned/Popups";
import { getFeatureFlag, updateFeatureFlag } from "@/shared/lib/features";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { getUserAuthData } from "@/entities/User";
import { useSelector } from "react-redux";
import { HStack } from "@/shared/ui/redesigned/Stack";

import { Skeleton } from "@/shared/ui/redesigned/Skeleton";
import { useForceUpdate } from "@/shared/lib/render/forceUpdate";
import { AppText } from "@/shared/ui/redesigned/AppText";

interface UiDesignSwitcherProps {
  className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const isAppRedesigne = getFeatureFlag("isAppRedesigned");
  const authData = useSelector(getUserAuthData);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const forceUpdate = useForceUpdate();
  const items = [
    {
      content: t("New"),
      value: "new",
    },
    {
      content: t("Old"),
      value: "old",
    },
  ];
  const onChange = async (value: string) => {
    if (authData) {
      setIsLoading(true);
      await dispatch(
        updateFeatureFlag({
          userId: authData?.id,
          newFeatures: {
            isAppRedesigned: value === "new" ? true : false,
          },
        }),
      ).unwrap();
      setIsLoading(false);
      forceUpdate();
    }
  };
  return (
    <HStack>
      <AppText text={t("Interface option")} />
      {isLoading ? (
        <Skeleton
          width={"100px"}
          height={"40px"}
          border={"25px"}
        />
      ) : (
        <Listbox
          onChange={onChange}
          items={items}
          value={isAppRedesigne ? "new" : "old"}
          className={classNames(s.uiDesignSwitcher, {}, [className])}
        />
      )}
    </HStack>
  );
});
