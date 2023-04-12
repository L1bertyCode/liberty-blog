import { memo } from "react";

import { Modal } from "7shared/ui/Modal/Modal";

import { classNames } from "7shared/lib/classNames/classNames";
import s from "./LoginModal.module.scss";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = memo((props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;
  return (
    <Modal
      className={classNames(s.loginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy={true}
    >
      <LoginForm onClose={onClose} isOpen={isOpen} />
    </Modal>
  );
});
