const EC = require('protractor').ExpectedConditions;
const logger = require('../../config/logger.config').logger;

class Element {
  constructor(name, xpath) {
    this.name = name;
    this.element = element(by.xpath(xpath));
  };

  async click() {
    logger.info(`Click on ${this.name} was performed`);
    return this.element.click();
  };

  async getText() {
    logger.info(`Got text from ${this.name}`);
    return this.element.getText();
  };

  async typeText(text) {
    logger.info(`Text was typed into ${this.name}`);
    return this.element.sendKeys(text);
  };

  async submit() {
    logger.info(`Submit on ${this.name} was performed`);
    return this.element.submit();
  };

  async mouseOver() {
    logger.info(`Mouse was over on ${this.name}`);
    return browser.actions().mouseMove(this.element).perform();
  };

  async isElementDisplayed() {
    return this.element.isDisplayed();
  };

  async waitForElementVisible() {
    return browser.wait(EC.visibilityOf(this.element), 10000);
  };
}

module.exports = Element;
