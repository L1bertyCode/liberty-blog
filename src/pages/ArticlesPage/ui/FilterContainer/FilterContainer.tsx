import { memo } from "react";

import { ArticlesFilters } from "@/widgets/ArticlesFilters";
import { useArticleFilters } from "../../lib/hooks/useArticleFilters";

interface FilterContainerProps {
  className?: string;
}

export const FilterContainer = memo((props: FilterContainerProps) => {
  const { className } = props;
  const {
    order,
    sort,
    search,
    type,
    onChangeSort,
    onChangeOrder,
    onChangeSearch,
    onChangeType,
  } = useArticleFilters();

  return (
    <ArticlesFilters
      search={search}
      sort={sort}
      order={order}
      type={type}
      onChangeSearch={onChangeSearch}
      onChangeOrder={onChangeOrder}
      onChangeSort={onChangeSort}
      onChangeType={onChangeType}
      className={className}
    />
  );
});
