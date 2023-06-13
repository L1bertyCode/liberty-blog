describe("User visits the ArticleListPage ", () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit(`/articles`);
    });
  });
  it("Articles load success", () => {
    cy.getByTestId("ArticleList").should("exist");
    cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3);
  });
  it("On stubs", () => {
    cy.intercept("GET", "**/articles?*", {
      fixture: "articles.json",
    });
    cy.getByTestId("ArticleList").should("exist");
    cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3);
  });
  it.skip("Example !(Articles load success)", () => {
    cy.getByTestId("ArticleList").should("exist");
    cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3);
    cy.getByTestId("exist").should("exist");
  });
});
