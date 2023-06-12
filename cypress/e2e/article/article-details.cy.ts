describe("template spec", () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit(`/articles`);
    });
  });
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});
