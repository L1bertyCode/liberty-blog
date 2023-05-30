import {
  classNames,
  Mods,
} from "shared/lib/classNames/classNames";
import React, { memo, ReactNode } from "react";
import { useTheme } from "app/providers/ThemeProvider";

import { Overlay } from "../Overlay/Overlay";
import s from "./Drawer.module.scss";
import { Portal } from "../Portal/Portal";
import { useModal } from "shared/lib/hooks/useModal";

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
  const { className, children, onClose, isOpen, lazy } =
    props;
  const { theme } = useTheme();

  const { close, isClosing, isMounted } = useModal({
    animationDelay: 300,
    onClose,
    isOpen,
  });

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
        className={classNames(s.Drawer, mods, [
          className,
          theme,
          "app_drawer",
        ])}
      >
        <Overlay onClick={close} />
        <div className={s.content}>{children}</div>
      </div>
    </Portal>
  );
});
