// ***********************************************
// This example commands.js shows you how to
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

Cypress.Commands.add("login", (username, password) => {
  // Visit page and click on Log In
  cy.visit("https://www.demoblaze.com");
  cy.get("#login2").click();
  cy.get("#logInModal").should("be.visible");

  // Type username and password previously used
  cy.get("#loginusername").click().type(username);
  cy.get("#loginpassword").click().type(password);

  // Click on log in button and validate welcome message is displayed
  cy.get(
    "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
  ).click();
  cy.get("#nameofuser")
    .should("be.visible")
    .contains("Welcome " + username);
});

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
