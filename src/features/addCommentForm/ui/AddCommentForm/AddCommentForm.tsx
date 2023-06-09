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

import { AppInput as AppInputDeprecated } from "@/shared/ui/deprecated/AppInput";
import { AppButton as AppButtonDeprecated } from "@/shared/ui/deprecated/AppButton";

import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./AddCommentForm.module.scss";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { ToggleFeatures } from "@/shared/lib/features";
import { AppButton } from "@/shared/ui/redesigned/AppButton";
import { AppInput } from "@/shared/ui/redesigned/AppInput";
import { Card } from "@/shared/ui/redesigned/Card";

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();
  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );
  const onSendHandler = useCallback(() => {
    onSendComment(text || "");
    onCommentTextChange("");
  }, [text, onSendComment, onCommentTextChange]);
  return (
    <DynamicModuleLoader reducers={reducers}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card
            fullWidth
            padding="24">
            <HStack
              data-testid={"AddCommentForm"}
              fullWidth
              gap="16"
              className={classNames(s.AddCommentFormredesigned, {}, [
                className,
              ])}>
              <AppInput
                data-testid={"AddCommentForm.Input"}
                className={s.input}
                placeholder={t("Enter comment text") || ""}
                value={text}
                onChange={onCommentTextChange}
              />
              <AppButton
                data-testid={"AddCommentForm.Button"}
                onClick={onSendHandler}>
                {"Send"}
              </AppButton>
            </HStack>
          </Card>
        }
        off={
          <HStack
            data-testid={"AddCommentForm"}
            fullWidth
            className={classNames(s.addCommentForm, {}, [className])}>
            <AppInputDeprecated
              data-testid={"AddCommentForm.Input"}
              className={s.input}
              placeholder={t("Enter comment text") || ""}
              value={text}
              onChange={onCommentTextChange}
            />
            <AppButtonDeprecated
              data-testid={"AddCommentForm.Button"}
              onClick={onSendHandler}>
              {"Send"}
            </AppButtonDeprecated>
          </HStack>
        }
      />
    </DynamicModuleLoader>
  );
});
export default AddCommentForm;
