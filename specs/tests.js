const adaptBrowser = require('../patterns/adapter/implementation');
const baseUrl = 'https://www.globalsqa.com/angularJs-protractor/BankingProject';

describe('Add', () => {
  it('new customer', async () => {
    await adaptBrowser.open(baseUrl);
    await adaptBrowser.clickOn('button[ng-click="manager()"]');
    await adaptBrowser.clickOn('button[ng-click="addCust()"]');
    await adaptBrowser.fillNewCustomerData('Test First Name', 'Last Name', '03065');
    await adaptBrowser.clickOn('button[type="submit"]');
    await adaptBrowser.checkAlert();
  });
});
