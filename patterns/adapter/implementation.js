const instance = require('../module')().setFramework().getFramework();

module.exports = new class {
  constructor(browserInstance) {
    this.browserInstance = browserInstance;
  }

  async open(url) {
    return this.browserInstance.goUrl(url);
  }

  async clickOn(locator) {
    return this.browserInstance.clickOn(locator);
  }

  async fillData(locator, data) {
    return this.browserInstance.fillData(locator, data);
  }

  async getAlertText() {
    return this.browserInstance.getAlertText();
  }

  async fillNewCustomerData() {
    return this.browserInstance.fillNewCustomerData();
  }
}(instance);
