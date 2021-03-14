const adaptBrowser = require('../patterns/adapter/implementation');
const baseUrl = 'https://www.globalsqa.com/angularJs-protractor/BankingProject';

describe('Pattern', () => {
  it('should provide steps', async () => {
    await adaptBrowser.open(baseUrl)
      .then(browser => browser.clickOn('button[ng-click="manager()"]'))
      .then(browser => browser.clickOn('button[ng-click="addCust()"]'))
      .then(browser => browser.fillNewCustomerData('Test First Name', 'Last Name', '03065'))
      .then(browser => browser.clickOn('button[type="submit"]'))
      .then(browser => browser.checkAlert());
  });
});
