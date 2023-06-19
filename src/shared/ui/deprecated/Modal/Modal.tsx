import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { ReactNode } from "react";
import { useTheme } from "@/app/providers/ThemeProvider";

import { Overlay } from "../../redesigned/Overlay/Overlay";
import { Portal } from "../../redesigned/Portal/Portal";
import s from "./Modal.module.scss";
import { useModal } from "@/shared/lib/hooks/useModal";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;
/**
 * @deprecated
 */
export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const { close, isClosing, isMounted } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isOpen,
  });

  const { theme } = useTheme();

  const mods: Mods = {
    [s.opened]: isOpen,
    [s.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(s.modal, mods, [className, theme, "app_modal"])}>
        <Overlay onClick={close} />
        <div className={s.content}>{children}</div>
      </div>
    </Portal>
  );
};
