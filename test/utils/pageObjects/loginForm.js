const Element = require('./base_elements/element');

class LoginForm {
  constructor() {
    this.emailField = new Element('emailField', by.xpath('//input[contains(@name,"j_username")]'));
    this.passwordField = new Element('passwordField', by.xpath('//input[contains(@name,"j_password")]'));
    this.signinButton = new Element('signinButton', by.xpath('//form[contains(@name,"loginForm")]//button[contains(@type,"submit")]'));
    this.loginErrorMessage = new Element('loginErrorMessage', by.xpath('//*[contains(@class,"login-error")]'));
  };

  async login(email, password) {
    await this.emailField.typeText(email);
    await this.passwordField.typeText(password);
    return this.signinButton.click();
  };
}

module.exports = LoginForm;
