import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./ScrollSave.module.scss";

interface ScrollSaveProps {
    className?: string;
}

export const ScrollSave = memo((props:ScrollSaveProps) => {
const { className } = props;
const { t } = useTranslation();
    return (
        <div className={classNames(s.scrollSave,{},[className])}>
            <div>ScrollSave</div>
        </div>
    );
});