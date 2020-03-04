const BasePage = require('./base_elements/basePage');
const Element = require('./base_elements/element');
const Collection = require('./base_elements/collection');

class SearchResultsPage extends BasePage {
  constructor() {
    super();
    this.slickSlider = new Element('slickSlider', by.xpath('//*[contains(@class,"slick-slider")]'));
    this.filterCheckBoxes = new Collection('filterCheckBoxes', by.xpath('//*[contains(@class,"checkmark")]'));
  };
}

module.exports = SearchResultsPage;
