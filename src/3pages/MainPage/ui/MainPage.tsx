import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AppInput } from "7shared/ui/AppInput/AppInput";

import s from "./MainPage.module.scss";

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const onChange = (val: string) => {
    setValue(val);
  };
  return (
    <div className={s.green}>
      {t("Main")}
      {/* <BugButton /> */}
      {/* <Counter /> */}
      <AppInput value={value} onChange={onChange} placeholder="Type text" />
    </div>
  );
};

export default MainPage;
