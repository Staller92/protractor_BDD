const BasePage = require('./base_elements/basePage');
const Element = require('./base_elements/element');
const logger = require('../../config/logger.config').logger;

class MainPage extends BasePage {
  constructor() {
    super();
    this.url = 'https://shop.westerndigital.com';
    this.searchButton = new Element('searchButton', by.xpath('//*[contains(@class,"searchbutton")]'));
    this.searchInput = new Element('searchInput', by.xpath('//*[@id="searchright"]'));
  };

  open() {
    return super.open(this.url);
  };

  async search(text) {
    logger.info(`Searching by text ${text}`);
    await this.searchInput.typeText(text);
    return this.searchInput.submit();
  };
}

module.exports = MainPage;
