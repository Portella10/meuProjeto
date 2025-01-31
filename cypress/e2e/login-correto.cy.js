/// <reference types="cypress" />
describe("Tela de login", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  context("Quando o usuário insere nome e senha válidos", () => {
    it("deve fazer login com sucesso", () => {
      cy.get('[data-test="username"]').type("standard_user");
      cy.get('[data-test="password"]').type("secret_sauce");
      cy.get("#login-button").click();
      cy.get(".product_label").should("contain.text", "Products");
    });
  });
  context("Quando o usuário coloca senha inválida", () => {
    it("Deve apresentar uma mensagem de erro", () => {
      cy.get('[data-test="username"]').type("standard_user");
      cy.get('[data-test="password"]').type("joao");
      cy.get("#login-button").click();
      cy.get('[data-test="error"]').should(
        "contain.text",
        "Epic sadface: Username and password do not match any user in this service"
      );
    });
  });
  context("Quando o usuário coloca nome inválido", () => {
    it("Deve apresentar erro", () => {
      cy.get('[data-test="username"]').type("Joao");
      cy.get('[data-test="password"]').type("secret_sauce");
      cy.get("#login-button").click();
      cy.get('[data-test="error"]').should(
        "contain.text",
        "Epic sadface: Username and password do not match any user in this service"
      );
    });
  });
  context("Quando o usuário deixa o campo nome em branco", () => {
    it("Deve apresentar uma mensagem de erro", () => {
      cy.get('[data-test="password"]').type("secret_sauce");
      cy.get("#login-button").click();
      cy.get('[data-test="error"]').should(
        "contain.text",
        "Epic sadface: Username is required"
      );
    });
  });
  context("Quando o usuário deixa o campo senha em branco", () => {
    it("Deve apresentar uma mensagem de erro", () => {
      cy.get('[data-test="username"]').type("standard_user");
      cy.get("#login-button").click();
      cy.get('[data-test="error"]').should(
        "contain.text",
        "Epic sadface: Password is required"
      );
    });
  });
});
