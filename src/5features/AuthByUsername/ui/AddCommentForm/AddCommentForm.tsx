import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./AddCommentForm.module.scss";
import { AppInput } from "7shared/ui/AppInput/AppInput";
import { AppButton } from "7shared/ui/AppButton/AppButton";

interface AddCommentFormProps {
  className?: string;
}

export const AddCommentForm = memo(
  (props: AddCommentFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
      <div
        className={classNames(s.addCommentForm, {}, [
          className,
        ])}
      >
        <AppInput
          placeholder={t("Enter comment text") || ""}
        />
        <AppButton>{"Send"}</AppButton>
      </div>
    );
  }
);
