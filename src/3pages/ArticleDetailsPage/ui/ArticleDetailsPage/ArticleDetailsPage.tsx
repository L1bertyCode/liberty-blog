import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "7shared/lib/classNames/classNames";

import s from "./ArticleDetailsPage.module.scss";
import { ArticleDetails } from "6entities/Article/ui/ArticleDetails/ArticleDetails";
import { useParams } from "react-router-dom";
import { AppText } from "7shared/ui/AppText/AppText";
import { CommentList } from "6entities/Comment";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(
  (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    if (!id) {
      return (
        <div
          className={classNames(s.articleDetailsPage, {}, [
            className,
          ])}
        >
          {t("Article not found")}
        </div>
      );
    }
    return (
      <div
        className={classNames(s.articleDetailsPage, {}, [
          className,
        ])}
      >
        <ArticleDetails id={id} />
        <AppText
          title={t("Comments")}
          className={s.commentTitle}
        />
        <CommentList
          comments={[
            {
              id: "1",
              text: "comment 1",
              user: {
                id: "1",
                username: "username 1",
                avatar:
                  "https://media.wired.com/photos/644318b17b25a434b1f3bbd7/master/w_2560%2Cc_limit/security_hacker_names.jpg",
              },
            },
            {
              id: "2",
              text: "comment 2",
              user: {
                id: "2",
                username: "username 2",
                avatar:
                  "https://media.wired.com/photos/644318b17b25a434b1f3bbd7/master/w_2560%2Cc_limit/security_hacker_names.jpg",
              },
            },
          ]}
        />
      </div>
    );
  }
);
export default ArticleDetailsPage;
