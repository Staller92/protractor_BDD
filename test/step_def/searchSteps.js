const {Then, When} = require('cucumber');
const {expect} = require('chai');
const {logger} = require('../config/logger.config');
const MainPage = require('../pageObjects/mainPage');
const SearchResultsPage = require('../pageObjects/searchResultsPage');

const mainPage = new MainPage();
const searchResultsPage = new SearchResultsPage();

Then(/^Page with url "([^"]*)" is opened$/, async function(expectedUrl) {
  const actualUrl = await mainPage.getCurrentUrl();
  logger.info(`Current url is ${actualUrl}`);
  return expect(actualUrl, 'Url of the page is not correct').to.be.equal(expectedUrl);
});

When(/^User searches for "([^"]*)"$/, async function(term) {
  await mainPage.searchButton.click();
  return mainPage.search(term);
});

Then(/^Slick slider is displayed$/, async function() {
  await searchResultsPage.slickSlider.waitForElementVisible();
  logger.info('Verify that slick slider is displayed');
  const isSlickSliderDisplayed = await searchResultsPage.slickSlider.isElementDisplayed();
  return expect(isSlickSliderDisplayed, 'Slick slider is not displayed').to.be.equal(true);
});

Then(/^Filter section with '(\d+)' checkboxes are displayed$/, async function(number) {
  await searchResultsPage.filterCheckBoxes.waitForElementVisible();
  const count = await searchResultsPage.filterCheckBoxes.getCount();
  return expect(count).to.be.equal(number);
});

When(/^User mouses over on shop button$/, function() {
  return mainPage.Header.shopButton.mouseOver();
});

When(/^User mouses over on san disk Button$/, function() {
  return mainPage.Header.sanDiskButton.mouseOver();
});

Then(/^All san disk product items are displayed$/, async function() {
  const productsTitles = await mainPage.Header.allSanDiskProductItems.getText();
  logger.info('All san disk product items are displayed');
  return expect(productsTitles).to.include('Portable Drives');
});

