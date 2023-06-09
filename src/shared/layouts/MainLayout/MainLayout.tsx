import { memo, ReactElement } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./MainLayout.module.scss";

interface MainLayoutProps {
  header: ReactElement;
  content: ReactElement;
  sidebar: ReactElement;
  className?: string;
  toolbar?: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
  const { className, content, toolbar, header, sidebar } = props;

  return (
    <div className={classNames(s.mainLayout, {}, [className])}>
      <div className={s.content}>{content}</div>
      <div className={s.sidebar}>{sidebar}</div>
      <div className={s.rightbar}>
        <div className={s.header}>{header}</div>
        <div className={s.toolbar}>{toolbar}</div>
      </div>
    </div>
  );
});
