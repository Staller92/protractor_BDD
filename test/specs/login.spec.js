const {expect} = require('chai');
const MainPage = require('../utils/pageObjects/mainPage');
const LoginForm = require('../utils/pageObjects/loginForm');

describe('Log in tests', function() {
  const mainPage = new MainPage();

  beforeEach(async function() {
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().implicitlyWait(2000);
    browser.manage().window().maximize();
    await mainPage.open();
  });

  it('Error message should be displayed in case of incorrect data', async function() {
    await mainPage.Header.loginButton.click();
    const loginForm = new LoginForm();
    await loginForm.login('incorrect@email.com', 'incorrect_password');
    await loginForm.loginErrorMessage.waitForElementVisible();
    const errorMessage = await loginForm.loginErrorMessage.getText();
    expect(errorMessage, 'Error message is not correct').to.be.equal('Your username or password was incorrect.');
  });
});

