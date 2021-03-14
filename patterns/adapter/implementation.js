const PlaywrightBrowser = require('./based.on.playwright');
const WDIOBrowser = require('./based.on.wdio');

module.exports = new class {
  constructor(browserInstance) {
    this.browserInstance = browserInstance;
  }

  async open(url) {
    await this.browserInstance.goUrl(url);
    return this;
  }

  async clickOn(locator) {
    await this.browserInstance.clickOn(locator);
    return this;
  }

  async fillData(locator, data) {
    await this.browserInstance.fillData(locator, data);
    return this;
  }

  async checkAlert() {
    await this.browserInstance.checkAlert();
    return this;
  }

  async fillNewCustomerData(firstName, lastName, code) {
    await this.browserInstance.fillNewCustomerData(firstName, lastName, code);
    return this;
  }

}(new PlaywrightBrowser());
