import { CSSProperties, memo, useMemo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Avatar.module.scss";

interface AvatarProps {
  src?: string;
  className?: string;
  size?: number;
  alt?: string;
}

export const Avatar = memo((props: AvatarProps) => {
  const { className, src, size, alt = "img" } = props;
  const style = useMemo<CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100,
    };
  }, [size]);
  return (
    <img
      alt={alt}
      src={src}
      style={style}
      className={classNames(s.avatar, {}, [className])}
    />
  );
});
