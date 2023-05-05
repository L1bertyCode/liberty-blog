import { HTMLAttributes, ReactNode, memo } from "react";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./Card.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const Card = (props: CardProps) => {
  const { className, children, ...otherProps } = props;
  return (
    <div
      className={classNames(s.card, {}, [className])}
      {...otherProps}
    >
      {children}
    </div>
  );
};
