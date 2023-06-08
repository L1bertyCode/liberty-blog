import { CSSProperties, memo, useMemo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Avatar.module.scss";
import { AppIcon } from "../AppIcon";
import UserIcon from "@/shared/assets/icons/user-filled.svg";
import { Skeleton } from "../Skeleton";
import { AppImage } from "../AppImage";
interface AvatarProps {
  src?: string;
  className?: string;
  size?: number;
  alt?: string;
}

export const Avatar = memo((props: AvatarProps) => {
  const {
    className,
    src,
    size = "100px",
    alt = "img",
  } = props;
  const style = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);
  const errorFallback = (
    <div>
      <AppIcon width={size} height={size} Svg={UserIcon} />
    </div>
  );
  const fallback = (
    <Skeleton width={size} height={size} border={"50%"} />
  );
  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      alt={alt}
      src={src}
      style={style}
      className={classNames(s.avatar, {}, [className])}
    />
  );
});
