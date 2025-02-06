/// <reference types="cypress" />
describe("Site com problema", () => {
  beforeEach(() => {
    cy.visit(Cypress.config("baseUrl"));
    cy.problem_user("problem_user", "secret_sauce");
  });
  context("Verificando link do produto", () => {
    it.skip("Deve aparecer o produto correspondente ao link", () => {
      cy.log("Teste ignorado devido a bug no link do produto");
      cy.get(".inventory_item")
        .contains(".inventory_item_name", "Sauce Labs Backpack")
        .closest(".inventory_item")
        .find(".inventory_item_price")
        .should("contain.text", "$29.99")
        .closest(".inventory_item")
        .find(".inventory_item_name")
        .click();
      cy.get(".inventory_details_name").should(
        "contain.text",
        "Sauce Labs Backpack"
      );
      cy.get(".inventory_details_price").should("contain.text", "$29.99");
    });
  });
});
