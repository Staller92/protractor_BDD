const Element = require('./base_elements/element');
const Collection = require('./base_elements/collection');

class Header {
  constructor() {
    this.shopButton = new Element('shop button', by.xpath('//*[contains(@id,"productStore")]'));
    this.loginButton = new Element('login button', by.xpath('//*[contains(@class, "user-profile")]//following-sibling::*/a[contains(text(), "Store Login")]'));
    this.sanDiskButton = new Element('san disk button', by.xpath('//*[contains(@data-nav,"sandisk")]'));
    this.allSanDiskProductItems = new Collection('allSanDiskProductItems', by.xpath('//*[contains(@id,"sandisk")]//a'));
  };
}

module.exports = Header;

