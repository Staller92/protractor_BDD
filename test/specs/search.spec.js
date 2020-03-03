const {expect} = require('chai');
const MainPage = require('../utils/pageObjects/mainPage');
const SearchResultsPage = require('../utils/pageObjects/searchResultsPage');

describe('Search', function() {
  const mainPage = new MainPage();

  beforeEach(async function() {
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().implicitlyWait(2000);
    browser.manage().window().maximize();
    await mainPage.open();
  });

  it('Main page should be opened', async function() {
    const url = await mainPage.getCurrentUrl();
    expect(url, 'Url of the page is not correct').to.be.equal('https://shop.westerndigital.com/');
  });

  it('Slick slider should be displayed', async function() {
    await mainPage.searchButton.click();
    await mainPage.search('disk');
    const searchResultPage = new SearchResultsPage();
    await searchResultPage.slickSlider.waitForElementVisible();
    const isSlickSliderDisplayed = await searchResultPage.slickSlider.isElementDisplayed();
    expect(isSlickSliderDisplayed, 'Slick slider is not displayed').to.be.equal(true);
  });

  it('Filter should have 7 checkbox items', async function() {
    await mainPage.searchButton.click();
    await mainPage.search('disk');
    const searchResultsPage = new SearchResultsPage();
    await searchResultsPage.filterCheckBoxes.waitForElementVisible();
    const count = await searchResultsPage.filterCheckBoxes.getCount();
    expect(count, '7 checkbox items are not displayed').to.be.equal(7);
  });

  it('Should display the popover-content on mouseover', async function() {
    await mainPage.Header.shopButton.mouseOver();
    await mainPage.Header.sanDiskButton.mouseOver();
    const productsTitles = await mainPage.Header.allSanDiskProductItems.getText();
    expect(productsTitles.includes('Portable Drives')).to.be.equal(true);
  });
});

