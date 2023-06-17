import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import ListIcon from "@/shared/assets/icons/list-24-24.svg";
import TiledIcon from "@/shared/assets/icons/tiled-24-24.svg";

import s from "./ArticleViewSelector.module.scss";

import { AppButton, AppButtonVariant } from "@/shared/ui/deprecated/AppButton";
import { AppIcon } from "@/shared/ui/deprecated/AppIcon";
import { ArticleView } from "@/entities/Article/model/consts/consts";

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}
const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon,
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, onViewClick, view } = props;
  const { t } = useTranslation();

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };
  return (
    <div className={classNames(s.artcileViewSelector, {}, [className])}>
      {viewTypes.map((viewType, index) => (
        <AppButton
          key={index}
          onClick={onClick(viewType.view)}
          variant={AppButtonVariant.CLEAR}>
          <AppIcon
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
  );
});
