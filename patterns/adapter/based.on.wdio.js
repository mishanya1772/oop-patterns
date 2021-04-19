const testData = require('../builder');

class WDIOBrowser {
  constructor() {
    this.postCode = testData
      .prepareUrl()
      .send();
  }

  async goUrl(url) {
    await browser.url(url);
    expect(await browser.getTitle()).toBe('XYZ Bank');
  }

  async clickOn(locator) {
    return (await $(locator)).click();
  }

  async fillData(locator, data) {
    return (await $(locator)).setValue(data);
  }

  async getAlertText() {
    return browser.getAlertText();
  }

  async fillNewCustomerData(firstName = 'Test First Name', lastName = 'Last Name') {
    await this.fillData('[placeholder="First Name"]', firstName);
    await this.fillData('[placeholder="Last Name"]', lastName);
    return this.fillData('[placeholder="Post Code"]', this.postCode);
  }
}

module.exports = WDIOBrowser;
