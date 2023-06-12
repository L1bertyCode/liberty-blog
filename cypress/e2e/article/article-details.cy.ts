let currentArticleId = "";
describe("User visit the ArticleDetailspage", () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      currentArticleId = article.id;
      cy.visit(`articles/${article.id}`);
    });
  });
  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });
  it("User sees the content of the article", () => {
    cy.getByTestId("ArticleDetails.Content").should(
      "exist"
    );
  });

  it("User sees ArticleRecommendationList", () => {
    cy.getByTestId("ArticleRecommendationList").should(
      "exist"
    );
  });
  it("User posts a comment", () => {
    cy.getByTestId("ArticleDetails.Content");
    cy.getByTestId("AddCommentForm").scrollIntoView();
    cy.addComment("text");
    cy.getByTestId("CommentCard.Content").should(
      "have.length",
      1
    );
  });
  it("User puts as rating", () => {
    cy.getByTestId("ArticleDetails.Content");
    cy.getByTestId("RatingCard").scrollIntoView();
    cy.setRate(4, "feedback");
    cy.get("[data-selected=true]").should("have.length", 4);
  });
});
