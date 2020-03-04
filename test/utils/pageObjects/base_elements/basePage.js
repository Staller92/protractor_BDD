const Header = require('../header');
const LoginForm = require('../loginForm');
const logger = require('../../../config/logger.config').logger;

class BasePage {
  constructor() {
    this.Header = new Header();
    this.LoginForm = new LoginForm();
  }

  async open(url) {
    logger.info(`Page with url ${this.url} is opened`);
    return browser.get(url);
  };

  async getCurrentUrl() {
    const currentUrl = await browser.getCurrentUrl();
    logger.info(`Current url is ${currentUrl}`);
    return currentUrl;
  };
}

module.exports = BasePage;
