import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import ListIconDeprecated from "@/shared/assets/icons/list-24-24.svg";
import TiledIconDeprecated from "@/shared/assets/icons/tiled-24-24.svg";
import ListIcon from "@/shared/assets/icons/burger.svg";
import TiledIcon from "@/shared/assets/icons/tile.svg";

import s from "./ArticleViewSelector.module.scss";

import { AppButtonVariant as AppButtonVariantDeprecated } from "@/shared/ui/deprecated/AppButton";

import { ArticleView } from "@/entities/Article/model/consts/consts";
import { ToggleFeatures, toggleFeatures } from "@/shared/lib/features";
import { AppButton } from "@/shared/ui/redesigned/AppButton";
import { AppIcon } from "@/shared/ui/redesigned/AppIcon";
import { AppIcon as AppIconDeprecated } from "@/shared/ui/deprecated/AppIcon";
import { Card } from "@/shared/ui/redesigned/Card";
import { HStack } from "@/shared/ui/redesigned/Stack";

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}
const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: toggleFeatures({
      name: "isAppRedesigned",
      on: () => TiledIcon,
      off: () => TiledIconDeprecated,
    }),
  },
  {
    view: ArticleView.BIG,
    icon: toggleFeatures({
      name: "isAppRedesigned",
      on: () => ListIcon,
      off: () => ListIconDeprecated,
    }),
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, onViewClick, view } = props;
  const { t } = useTranslation();

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card
          className={classNames(s.artcileViewSelectorRedesigned, {}, [
            className,
          ])}
          borderRadius="round_40">
          <HStack>
            {viewTypes.map((viewType, index) => (
              <AppIcon
                key={index}
                clickable
                onClick={onClick(viewType.view)}
                Svg={viewType.icon}
                width={"32px"}
                height={"32px"}
                className={classNames("", {
                  [s.notSelected]: viewType.view !== view,
                })}
              />
            ))}
          </HStack>
        </Card>
      }
      off={
        <div className={classNames(s.artcileViewSelector, {}, [className])}>
          {viewTypes.map((viewType, index) => (
            <AppButton
              key={index}
              onClick={onClick(viewType.view)}
              variant={AppButtonVariantDeprecated.CLEAR}>
              <AppIconDeprecated
                Svg={viewType.icon}
                width={"32px"}
                height={"32px"}
                className={classNames("", {
                  [s.notSelected]: viewType.view !== view,
                })}
              />
            </AppButton>
          ))}
        </div>
      }
    />
  );
});
