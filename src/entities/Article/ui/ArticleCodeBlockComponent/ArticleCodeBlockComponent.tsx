import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticleCodeBlockComponent.module.scss";

import { ArticleCodeBlock } from "../../model/types/article";
import { Code } from "@/shared/ui/Code/Code";

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
  (props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props;
    return (
      <div
        className={classNames(
          s.articleCodeBlockComponent,
          {},
          [className]
        )}
      >
        <Code text={block.code} />
      </div>
    );
  }
);
