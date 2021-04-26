const Browser = require('../singleton');
const ApiContract = require('../builder');
const request = require('../../components/addGetRequest');

class PlaywrightBrowser {
  constructor() {
    this.alertDialog = null;
    this.page = null;
    this.prepareData = request(new ApiContract());
  }

  async goUrl(url) {
    this.page = await new Browser().tab;

    await this.page.goto(url);
    expect(await this.page.title()).toBe('XYZ Bank');

    this.page.on('dialog', async (dialog) => {
      this.alertDialog = await dialog.message();
      await dialog.accept();
    });
  }

  async clickOn(locator) {
    await this.waitForElement(locator);
    return this.page.click(locator);
  }

  async fillData(locator, data) {
    await this.waitForElement(locator);
    return this.page.fill(locator, data);
  }

  async getAlertText() {
    return this.alertDialog;
  }

  async fillNewCustomerData(firstName = 'Test First Name', lastName = 'Last Name') {
    const postCode = await this.prepareData.random().getRequest();

    await this.fillData('[placeholder="First Name"]', firstName);
    await this.fillData('[placeholder="Last Name"]', lastName);
    return this.fillData('[placeholder="Post Code"]', postCode);
  }

  async waitForElement(locator) {
    return this.page.waitForSelector(locator);
  }
}

module.exports = PlaywrightBrowser;
