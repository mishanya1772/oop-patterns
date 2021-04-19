const adaptBrowser = require('../patterns/adapter/implementation');
const baseUrl = 'https://www.globalsqa.com/angularJs-protractor/BankingProject';

describe('Add', () => {
  it('new customer', async () => {
    await adaptBrowser.open(baseUrl);
    await adaptBrowser.clickOn('button[ng-click="manager()"]');
    await adaptBrowser.clickOn('button[ng-click="addCust()"]');
    await adaptBrowser.fillNewCustomerData();
    await adaptBrowser.clickOn('button[type="submit"]');
    expect(await adaptBrowser.getAlertText()).toContain('Customer added successfully with customer');
  });
});
