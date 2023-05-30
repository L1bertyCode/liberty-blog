import React, {
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Mods,
  classNames,
} from "shared/lib/classNames/classNames";

import s from "./Modal.module.scss";
import { Portal } from "../Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";
import { Overlay } from "../Overlay/Overlay";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  lazy?: boolean;
  onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } =
    props;
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  const timerRef = useRef() as MutableRefObject<
    ReturnType<typeof setTimeout>
  >;

  const mods: Mods = {
    [s.opened]: isOpen,
    [s.softСlosing]: !isOpen,
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(isOpen);
    }
  }, [isOpen]);
  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
      timerRef.current = setTimeout(() => {}, 300);
    }
  }, [onClose]);

  const onKeyDowwn = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );
  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDowwn);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDowwn);
    };
  }, [isOpen, onKeyDowwn]);
  if (lazy && !isMounted) {
    return null;
  }
  return (
    <Portal>
      <div
        className={classNames(s.modal, mods, [
          className,
          theme,
        ])}
      >
        <Overlay onClick={closeHandler} />
        <div className={s.content}>{children}</div>
      </div>
    </Portal>
  );
};
