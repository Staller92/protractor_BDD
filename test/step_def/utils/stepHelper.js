const SearchResultsPage = require('../../pageObjects/searchResultsPage');
const MainPage = require('../../pageObjects/mainPage');
const LoginForm = require('../../pageObjects/loginForm');
const Header = require('../../pageObjects/header');

function findElementForClick(route) {
  const array = route.split('>');
  const page = array[0];
  const element = array[1];
  let pageElement;
  switch (page) {
    case 'Main':
      const mainPage = new MainPage();
      pageElement = getPageObjectElement(mainPage, element);
      break;
    case 'Login form':
      const loginForm = new LoginForm();
      pageElement = getPageObjectElement(loginForm, element);
      break;
    case 'Header':
      const header = new Header();
      pageElement = getPageObjectElement(header, element);
      break;
    case 'Search results':
      const searchResultsPage = new SearchResultsPage();
      pageElement = getPageObjectElement(searchResultsPage, element);
      break;
    default:
      throw new Error('There are no such page!');
  }
  return pageElement;
}

function getPageObjectElement(object, elementName) {
  for (const field in object) {
    if (object.hasOwnProperty(field)) {
      if (object[field].name) {
        if (object[field].name === elementName) {
          return object[field];
        }
      }
    }
  }
}

module.exports = findElementForClick;
