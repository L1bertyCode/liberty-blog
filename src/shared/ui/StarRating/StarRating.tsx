import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./StarRating.module.scss";
import { AppIcon } from "../AppIcon/AppIcon";

import StarIcon from "@/shared/assets/icons/star.svg";

interface StarRatingProps {
  className?: string;
  onSelect?: () => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
  const {
    className,
    onSelect,
    size = 30,
    selectedStars = 0,
  } = props;
  const { t } = useTranslation();
  const [currentStarsCount, setCurrentStarsCount] =
    useState(0);
  const [isSelected, setIsSelected] = useState(
    Boolean(selectedStars)
  );
  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };
  return (
    <div
      className={classNames(s.starRating, {}, [className])}
    >
      {stars.map((starNumber) => {
        return (
          <AppIcon
            className={classNames(s.starIcon, {}, [
              currentStarsCount >= starNumber
                ? s.hovered
                : s.normal,
            ])}
            key={starNumber}
            Svg={StarIcon}
            width={size}
            height={size}
            onMouseLeave={onLeave}
            onMouseEnter={onHover(starNumber)}
          />
        );
      })}
    </div>
  );
});
