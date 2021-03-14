const adaptBrowser = require('../patterns/adapter/implementation');
const baseUrl = 'https://www.globalsqa.com/angularJs-protractor/BankingProject';
// const build = new (require('../patterns/builder'))('Test First Name', 'Last Name', '03065');

describe('Pattern', () => {
  xit('should open page based on different frameworks', function () {
    adaptBrowser.open(baseUrl);
  });

  it('should provide steps', async function () {
    await adaptBrowser.open(baseUrl);
      await adaptBrowser.clickOn('button[ng-click="manager()"]')
      // .clickOn('button[ng-click="addCust()"]')
      // .fillNewCustomerData('Test First Name', 'Last Name', '03065')
      // .clickOn('button[type="submit"]')
      // .checkAlert();
  });
});
