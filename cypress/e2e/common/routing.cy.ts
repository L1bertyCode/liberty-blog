import { selectByTestId } from "cypress/helpers/selectByTestId";

describe("Routing", () => {
  describe("User is not  Auth", () => {
    it("Main page", () => {
      cy.visit("/");
      cy.get(selectByTestId("MainPage")).should("exist");
    });
    it("Profile page", () => {
      cy.visit("/profile/1");
      cy.get(selectByTestId("MainPage")).should("exist");
    });
    it("Non-existend route", () => {
      cy.visit("/adfadsfdas");
      cy.get(selectByTestId("NotFoundPage")).should("exist");
    });
  });
  describe("User is Auth", () => {
    beforeEach(() => {
      cy.login();
    });

    it("Profile page", () => {
      cy.visit("/profile/1");
      cy.get(selectByTestId("ProfilePage")).should("exist");
    });
    it("Article list", () => {
      cy.visit("/articles");
      cy.get(selectByTestId("ArticlesPage")).should("exist");
    });
  });
});
