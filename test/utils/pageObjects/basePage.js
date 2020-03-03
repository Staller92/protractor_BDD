const Header = require('./header');
const LoginForm = require('./loginForm');

class BasePage {
  constructor() {
    this.Header = new Header();
    this.LoginForm = new LoginForm();
  }

  async open(url) {
    return browser.get(url);
  };

  async getCurrentUrl() {
    return browser.getCurrentUrl();
  };
}

module.exports = BasePage;
