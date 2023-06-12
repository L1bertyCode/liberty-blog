/// <reference types="cypress" />

import * as commonComands from "./commands/common";
import * as profileComands from "./commands/profile";
import * as articleComands from "./commands/article";
import * as commentComands from "./commands/comment";
import * as ratingComands from "./commands/rating";

Cypress.Commands.addAll(commonComands);
Cypress.Commands.addAll(profileComands);
Cypress.Commands.addAll(articleComands);
Cypress.Commands.addAll(commentComands);
Cypress.Commands.addAll(ratingComands);
// Cypress.Commands.overwrite("intercept", () => {
//   const FIXTURE_MODE = process.env.FIXTURE_MODE;
//   if (FIXTURE_MODE === "READ") {
//   }
//   if (FIXTURE_MODE === "WRITE") {
//     createFixture(); //EXAMPLE
//   }
// });

export {};
