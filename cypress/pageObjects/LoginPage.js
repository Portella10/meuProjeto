class LoginPage {
  getUserNameFild() {
    return cy.get('[data-test="username"]');
  }

  getPasswordFild() {
    return cy.get('[data-test="password"]');
  }

  getLoginButton() {
    return cy.get("#login-button");
  }

  typeUsername(username) {
    this.getUserNameFild().type(username);
  }

  typePassword(password) {
    this.getPasswordFild().type(password);
  }

  clickLoginButton() {
    this.getLoginButton().click();
  }
}

export default new LoginPage();
