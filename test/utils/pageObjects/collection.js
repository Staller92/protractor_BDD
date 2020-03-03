const EC = require('protractor').ExpectedConditions;

class Collection {
  constructor(name, xpath) {
    this.name = name;
    this.collection = element.all(by.xpath(xpath));
  };

  async getCount() {
    return this.collection.count();
  };

  async getText() {
    return this.collection.getText();
  };

  async waitForElementVisible() {
    return browser.wait(EC.visibilityOf(this.collection.first()), 7000);
  };
}

module.exports = Collection;
