import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import s from "./UiDesignSwitcher.module.scss";
import { memo } from "react";
import { Listbox } from "@/shared/ui/redesigned/Popups";
import { getFeatureFlag } from "@/shared/lib/features";

interface UiDesignSwitcherProps {
  className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const isAppRedesigne = getFeatureFlag("isAppRedesigned");
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
  const onChange = () => {};
  return (
    <Listbox
      onChange={onChange}
      items={items}
      value={isAppRedesigne ? "new" : "old"}
      className={classNames(s.uiDesignSwitcher, {}, [className])}
    />
  );
});
