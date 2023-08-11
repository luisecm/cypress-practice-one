const { faker } = require("@faker-js/faker");
const randomName = faker.internet.userName();
const randomPassword = faker.internet.password();

describe("Demo Blaze Tests - Signup and Login", () => {
  it("Create an account on Demo Blaze Tests", () => {
    // Visit page and click on Sign Up
    cy.visit("https://www.demoblaze.com");
    cy.get("#signin2").click();

    // On Signup modal, type a random name and password
    cy.get("#signInModal").should("be.visible");
    cy.get("#sign-username").click().type(randomName);
    cy.get("#sign-password").click().type(randomPassword);

    // Click on Sign in button and validate modal displayed
    cy.get(
      "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Sign up successful.");
    });
  });

  it("Attempt to sign up with same data", () => {
    // Visit page and click on Sign Up
    cy.visit("https://www.demoblaze.com");

    // On Signup modal, type a random name and password used before
    cy.get("#signin2").click();
    cy.get("#signInModal").should("be.visible");
    cy.get("#sign-username").trigger("input").type(randomName);
    cy.get("#sign-password").trigger("input").type(randomPassword);

    // Click on Sign in button and validate modal displayed
    cy.get(
      "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("This user already exist.");
    });
  });

  it("Login with your account on Demo Blaze Test", () => {
    // Visit page and click on Log In
    cy.login(randomName, randomPassword);
  });

  it("Logout from your account on Demo Blaze Test", () => {
    // Click on Logout button and assert Log In is displayed
    cy.get("#logout2").click();
    cy.get("#logout2").should("have.text", "Log in");
  });
});
