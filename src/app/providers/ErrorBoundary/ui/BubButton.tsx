import { AppButton } from "shared/ui/AppButton/AppButton";
import React, { useEffect, useState } from "react";

import s from "./BugButton.module.scss";

export const BugButton = () => {
  const [error, setError] = useState(false);
  const throwNewError = () => {
    setError((prev) => !prev);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return (
    // eslint-disable-next-line i18next/no-literal-string
    <AppButton onClick={throwNewError} className={s.btn}>
      Throw new Error
    </AppButton>
  );
};
