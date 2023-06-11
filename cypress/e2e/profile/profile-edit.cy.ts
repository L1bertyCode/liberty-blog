import { selectByTestId } from "cypress/helpers/selectByTestId";

describe("User moved to profile page ", () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit(`/profile/${data.id}`);
    });
  });
  it("Profile load success", () => {
    cy.get(selectByTestId("ProfileCard.firstname")).should(
      "have.value",
      "testuser"
    );
  });
  it("And edit profile page", () => {});
});
