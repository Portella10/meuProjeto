/// <reference types="cypress" />
describe("Tela de produtos", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/v1/inventory.html");
  });

  context("Adicionando produto no carrinho", () => {
    it("Deve aparecer o produto no carrinho", () => {
      cy.contains(
        ":nth-child(1) > .pricebar > .btn_primary",
        "ADD TO CART"
      ).click();
      cy.get(".shopping_cart_container > a").click();
      cy.get(".subheader").contains("Your Cart").should("be.visible");
      cy.get(".cart_quantity").should("have.text", "1");
    });
  });
  context("Retornando para a tela de produtos", () => {
    it("Deve retornar para a tela de produtos", () => {
      cy.visit("https://www.saucedemo.com/v1/cart.html");
      cy.get(".cart_footer").contains("Continue Shopping").click();
      cy.get(".product_label").should("contain.text", "Products");
    });
  });
  context("Fazendo a compra completa de 1 produto", () => {
    it("Deve realizar a compra", () => {
      cy.get(".inventory_item_name").contains("Sauce Labs Backpack").click();
      cy.get(".inventory_details_name").should(
        "contain.text",
        "Sauce Labs Backpack"
      );
      cy.get(".btn_primary").should("contain.text", "ADD TO CART").click();
      cy.get(".btn_primary").should("have.not.exist", "ADD TO CART");
      cy.get(".btn_secondary").should("contain.text", "REMOVE");
      cy.get(".shopping_cart_container > a").click();
      cy.get(".subheader").should("contain.text", "Your Cart");
      cy.get(".inventory_item_name")
        .contains("Sauce Labs Backpack")
        .should("be.visible");
      cy.get(".btn_action").contains("CHECKOUT").click();
      cy.get('[data-test="firstName"]').type("João");
      cy.get('[data-test="lastName"]').type("Senna");
      cy.get('[data-test="postalCode"]').type("00000-000");
      cy.get(".btn_primary").contains("CONTINUE").click();
      cy.get(".subheader").should("contain.text", "Checkout: Overview");
      cy.get(".inventory_item_name").should(
        "contain.text",
        "Sauce Labs Backpack"
      );
      cy.get(".btn_action").contains("FINISH").click();
      cy.get(".complete-header").should(
        "contain.text",
        "THANK YOU FOR YOUR ORDER"
      );
    });
  });
});
