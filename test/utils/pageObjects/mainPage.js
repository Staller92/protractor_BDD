const BasePage = require('./basePage');
const Element = require('./element');

class MainPage extends BasePage {
  constructor() {
    super();
    this.url = 'https://shop.westerndigital.com';
    this.searchButton = new Element('searchButton', '//*[contains(@class,"searchbutton")]');
    this.searchInput = new Element('searchInput', '//*[@id="searchright"]');
  };

  async open() {
    return super.open(this.url);
  };

  async search(text) {
    await this.searchInput.typeText(text);
    return this.searchInput.submit();
  };
}

module.exports = MainPage;
