const EC = require('protractor').ExpectedConditions;
const logger = require('../../config/logger.config').logger;

class Element {
  constructor(name, locator) {
    this.name = name;
    this.element = element(locator);
  };

  click() {
    logger.info(`Click on ${this.name} was performed`);
    return this.element.click();
  };

  getText() {
    logger.info(`Got text from ${this.name}`);
    return this.element.getText();
  };

  typeText(text) {
    logger.info(`Text was typed into ${this.name}`);
    return this.element.sendKeys(text);
  };

  submit() {
    logger.info(`Submit on ${this.name} was performed`);
    return this.element.submit();
  };

  mouseOver() {
    logger.info(`Mouse was over on ${this.name}`);
    return browser.actions().mouseMove(this.element).perform();
  };

  isElementDisplayed() {
    logger.info(`Verify that element ${this.name} is displayed`);
    return this.element.isDisplayed();
  };

  waitForElementVisible() {
    logger.info(`Waiting until element ${this.name} is visible`);
    return browser.wait(EC.visibilityOf(this.element), 10000);
  };
}

module.exports = Element;
