import { ReactNode, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  children?: ReactNode;
}

const Modal = (props: ModalProps) => {
  const { className, children } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(s.modal, {}, [className])}>
      <div className={s.overlay}>
        <div className={s.content}>{children}</div>
      </div>
    </div>
  );
};
export default Modal;
