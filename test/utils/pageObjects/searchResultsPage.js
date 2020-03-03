const BasePage = require('./basePage');
const Element = require('./element');
const Collection = require('./collection');

class SearchResultsPage extends BasePage {
  constructor() {
    super();
    this.slickSlider = new Element('slickSlider', '//*[contains(@class,"slick-slider")]');
    this.filterCheckBoxes = new Collection('filterCheckBoxes', '//*[contains(@class,"checkmark")]');
  };
}

module.exports = SearchResultsPage;
