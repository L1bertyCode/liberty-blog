import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div
      className={classNames(s.articlesPage, {}, [
        className,
      ])}
    >
      <div>ArticlesPage</div>
    </div>
  );
});
export default ArticlesPage;
