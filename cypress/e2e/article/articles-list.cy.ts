describe("User visits the ArticleListPage ", () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit(`/articles`);
    });
  });
  it("Articles load success", () => {
    cy.getByTestId("ArticleList").should("exist");
    cy.getByTestId("ArticleListItem").should(
      "have.length.greaterThan",
      3
    );
  });
});
