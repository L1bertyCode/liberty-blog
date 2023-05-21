import { CSSProperties, memo } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import s from "./Skeleton.module.scss";

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string | number;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const { className, height, width, border } = props;
  const styles: CSSProperties = {
    width: `${width}`,
    height: `${height}`,
    borderRadius: `${border}`,
  };
  return (
    <div
      className={classNames(s.skeleton, {}, [className])}
      style={styles}
    ></div>
  );
});
