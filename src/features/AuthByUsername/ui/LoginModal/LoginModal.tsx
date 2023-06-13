import { Suspense, memo } from "react";

import { Modal } from "@/shared/ui/Modal";

import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./LoginModal.module.scss";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import { Loader } from "@/shared/ui/Loader";

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
      lazy={true}>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
});
