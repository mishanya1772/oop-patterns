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

  async checkAlert() {
    return this.browserInstance.checkAlert();
  }

  async fillNewCustomerData(firstName, lastName, code) {
    return this.browserInstance.fillNewCustomerData(firstName, lastName, code);
  }
}(instance);
