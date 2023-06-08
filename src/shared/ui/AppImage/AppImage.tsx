import {
  ImgHTMLAttributes,
  ReactElement,
  memo,
  useLayoutEffect,
  useState,
} from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./AppImage.module.scss";

interface AppImageProps
  extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const AppImage = memo((props: AppImageProps) => {
  const {
    className,
    src,
    alt = "image",
    errorFallback,
    fallback,
    ...otherProps
  } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? "";
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (hasError && errorFallback) {
    return errorFallback;
  }

  return (
    <img
      className={classNames(s.appImage, {}, [className])}
      src={src}
      alt={alt}
      {...otherProps}
    />
  );
});
