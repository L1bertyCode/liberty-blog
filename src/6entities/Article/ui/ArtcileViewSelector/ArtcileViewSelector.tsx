import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import ListIcon from "7shared/assets/icons/list-24-24.svg";
import TiledIcon from "7shared/assets/icons/tiled-24-24.svg";

import s from "./ArtcileViewSelector.module.scss";
import { ArticleView } from "6entities/Article/model/types/article";
import {
  AppButton,
  AppButtonVariant,
} from "7shared/ui/AppButton/AppButton";
import { AppIcon } from "7shared/ui/AppIcon/AppIcon";

interface ArtcileViewSelectorProps {
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

export const ArtcileViewSelector = memo(
  (props: ArtcileViewSelectorProps) => {
    const { className, onViewClick, view } = props;
    const { t } = useTranslation();

    const onClick = (newView: ArticleView) => () => {
      onViewClick?.(newView);
    };
    return (
      <div
        className={classNames(s.artcileViewSelector, {}, [
          className,
        ])}
      >
        {viewTypes.map((viewType) => (
          <AppButton
            onClick={onClick(viewType.view)}
            variant={AppButtonVariant.CLEAR}
          >
            <AppIcon
              Svg={viewType.icon}
              className={classNames("", {
                [s.notSelected]: viewType.view !== view,
              })}
            />
          </AppButton>
        ))}
      </div>
    );
  }
);
