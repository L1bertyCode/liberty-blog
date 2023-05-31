import {
  memo,
  MutableRefObject,
  ReactNode,
  UIEvent,
  useRef,
} from "react";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll";
import s from "./Page.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import {
  getScrollSaveByPath,
  scrollSaveActions,
} from "@/features/ScrollSave";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { StateSchema } from "@/app/providers/StoreProvider";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect";
import { useThrottle } from "@/shared/lib/hooks/useThrottle";

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}
export const PAGE_ID = "PAGE_ID";

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef =
    useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef =
    useRef() as MutableRefObject<HTMLDivElement>;

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollposition = useSelector((state: StateSchema) =>
    getScrollSaveByPath(state, pathname)
  );

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollposition;
  });

  const onScroll = useThrottle(
    (e: UIEvent<HTMLDivElement>) => {
      console.log("scroll");

      dispatch(
        scrollSaveActions.setScrollPosition({
          position: e.currentTarget.scrollTop,
          parh: pathname,
        })
      );
    },
    500
  );

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section
      id={PAGE_ID}
      onScroll={onScroll}
      ref={wrapperRef}
      className={classNames(s.page, {}, [className])}
    >
      {children}
      {onScrollEnd ? (
        <div ref={triggerRef} className={s.trigger} />
      ) : null}
    </section>
  );
});
