import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose } = props;

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const mods: Record<string, boolean> = {
    [s.opened]: isOpen,
    [s.softСlosing]: !isOpen,
  };
  const { t } = useTranslation();
  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
      timerRef.current = setTimeout(() => {}, 300);
    }
  }, [onClose]);
  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
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
  return (
    <div className={classNames(s.modal, mods, [className])}>
      <div className={s.overlay} onClick={closeHandler}>
        <div className={s.content} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </div>
  );
};
export default Modal;
