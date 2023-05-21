import { ArticleDetailsRecommendationsSchema } from "./ArticleDetailsRecommendationsSchema";
import { ArticleDetailsCommentsSchema } from "./articleDetailsCommentsSchema";

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema;
  recomendations: ArticleDetailsRecommendationsSchema;
}
