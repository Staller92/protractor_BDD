const EC = require('protractor').ExpectedConditions;
const logger = require('../../config/logger.config').logger;


class Collection {
  constructor(name, locator) {
    this.name = name;
    this.collection = element.all(locator);
  };

  async getCount() {
    const count = await this.collection.count();
    logger.info(`Count of collection ${this.name} is ${count}`);
    return count;
  };

  async getText() {
    const text = await this.collection.getText();
    logger.info(`Text of collection ${this.name} is ${text}`);
    return text;
  };

  waitForElementVisible() {
    logger.info(`Waiting until collection ${this.name} is visible`);
    return browser.wait(EC.visibilityOf(this.collection.first()), 7000);
  };
}

module.exports = Collection;
