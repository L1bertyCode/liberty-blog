import { selectByTestId } from "cypress/helpers/selectByTestId";

let profileId = "";
describe("User moved to profile page ", () => {
  const newFirstName = "newfirstname";
  const newLastName = "newlastname";
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit(`/profile/${data.id}`);
      profileId = data.id;
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it("Profile load success", () => {
    cy.get(selectByTestId("ProfileCard.firstname")).should(
      "have.value",
      "testuser",
    );
  });
  it("And edit profile page", () => {
    cy.updateProfile(newFirstName, newLastName);
    cy.getByTestId("ProfileCard.firstname").should("have.value", newFirstName);
    cy.getByTestId("ProfileCard.lastname").should("have.value", newLastName);
  });
});
