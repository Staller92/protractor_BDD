const {Then, When, Given} = require('cucumber');
const {expect} = require('chai');
const {logger} = require('../config/logger.config');
const MainPage = require('../utils/pageObjects/mainPage');

const mainPage = new MainPage();

Given(/^User opens the main page$/, function() {
  logger.info(`Page with url ${mainPage.url} was opened`);
  return mainPage.open();
});

Given(/^User clicks on the "([^"]*)"$/, async function(button) {
  logger.info(`${button} was clicked`);
  return mainPage.Header.loginButton.click();
});

When(/^User is logged in with following details$/, async function(table) {
  const loginForm = mainPage.LoginForm;
  const data = table.rowsHash();
  await loginForm.login(data.email, data.password);
  logger.info(`User is logged in with following details: email ${data.email} and  password ${data.password}`);
  return loginForm.loginErrorMessage.waitForElementVisible();
});

Then(/^Error message "([^"]*)" is displayed$/, async function(expectedErrorMessage) {
  const loginForm = mainPage.LoginForm;
  const actualErrorMessage = await loginForm.loginErrorMessage.getText();
  logger.info(`Verifying that the error message ${expectedErrorMessage} is displayed`);
  return expect(actualErrorMessage, 'Error message is not correct').to.be.equal(expectedErrorMessage);
});

