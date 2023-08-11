describe("Demo Blaze Tests - Phones", () => {
  it("Login and place order - Test #2", () => {
    // Login with test account
    cy.login("luistest123", "test12345");

    // Go to phones section
    cy.get("#itemc").contains("Phones").click();

    // Add the first phone to Cart
    cy.get(":nth-child(1) > .card > :nth-child(1) > .card-img-top").click();
    cy.get(".name").should("have.text", "Samsung galaxy s6");
    cy.get(".col-sm-12 > .btn").click();

    // Return to home and then to phones section
    cy.get(".active > .nav-link").click();
    cy.get("#itemc").contains("Phones").click();

    // Add the second phone to Cart
    cy.get(
      ":nth-child(2) > .card > .card-block > .card-title > .hrefch"
    ).click();
    cy.get(".name").should("have.text", "Nokia lumia 1520");
    cy.get(".col-sm-12 > .btn").click();

    // Go to cart and validate the item is there
    cy.get(":nth-child(4) > .nav-link").click();
  });
});
