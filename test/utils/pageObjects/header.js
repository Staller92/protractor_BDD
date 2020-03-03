const Element = require('./element');
const Collection = require('./collection');

class Header {
  constructor() {
    this.shopButton = new Element('shopButton', '//*[contains(@id,"productStore")]');
    this.loginButton = new Element('loginButton', '//*[contains(@class, "user-profile")]//following-sibling::*/a[contains(text(), "Store Login")]');
    this.sanDiskButton = new Element('sanDiskButton', '//*[contains(@data-nav,"sandisk")]');
    this.allSanDiskProductItems = new Collection('allSanDiskProductItems', '//*[contains(@id,"sandisk")]//a');
  };
}

module.exports = Header;

