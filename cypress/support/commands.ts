/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
export {};

Cypress.Commands.add("visitUrl", (env: string, url: string) => {
  cy.log(`🚀 Visiting ${url}`);
  const environment = env.toLowerCase();
  const baseURL = Cypress.env(environment === "local" ? "localUrl" : "devUrl");

  return cy.visit(baseURL + url);
});

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to visit a URL based on environment.
       * @example cy.visitUrl('local', '/path-to-visit')
       */
      visitUrl(env: string, url: string): void;
    }
  }
}