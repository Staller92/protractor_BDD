const Element = require('./base_elements/element');
const Collection = require('./base_elements/collection');

class Header {
  constructor() {
    this.shopButton = new Element('shopButton', by.xpath('//*[contains(@id,"productStore")]'));
    this.loginButton = new Element('loginButton', by.xpath('//*[contains(@class, "user-profile")]//following-sibling::*/a[contains(text(), "Store Login")]'));
    this.sanDiskButton = new Element('sanDiskButton', by.xpath('//*[contains(@data-nav,"sandisk")]'));
    this.allSanDiskProductItems = new Collection('allSanDiskProductItems', by.xpath('//*[contains(@id,"sandisk")]//a'));
  };
}

module.exports = Header;

