/// <reference types="cypress" />

import * as commonComands from "./commands/common";
import * as profileComands from "./commands/profile";

Cypress.Commands.addAll(commonComands);
Cypress.Commands.addAll(profileComands);

export {};
