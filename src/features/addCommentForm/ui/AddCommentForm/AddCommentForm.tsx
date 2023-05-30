import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import {
  getAddCommentFormText,
  getAddCommentFormError,
} from "../../model/selectors/addCommentFormSelectors";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "../../model/slices/addCommentFormSlice";

import { AppInput } from "shared/ui/AppInput/AppInput";
import { AppButton } from "shared/ui/AppButton/AppButton";

import { classNames } from "shared/lib/classNames/classNames";
import s from "./AddCommentForm.module.scss";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { HStack } from "shared/ui/Stack";

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(
  (props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();
    const onCommentTextChange = useCallback(
      (value: string) => {
        dispatch(addCommentFormActions.setText(value));
      },
      [dispatch]
    );
    const onSendHandler = useCallback(() => {
      onSendComment(text || "");
      onCommentTextChange("");
    }, [text, onSendComment, onCommentTextChange]);
    return (
      <DynamicModuleLoader reducers={reducers}>
        <HStack
          max
          className={classNames(s.addCommentForm, {}, [
            className,
          ])}
        >
          <AppInput
            className={s.input}
            placeholder={t("Enter comment text") || ""}
            value={text}
            onChange={onCommentTextChange}
          />
          <AppButton onClick={onSendHandler}>
            {"Send"}
          </AppButton>
        </HStack>
      </DynamicModuleLoader>
    );
  }
);
export default AddCommentForm;