const playwrightBrowser = new (require('./based.on.playwright'))();
const wdioBrowser = new (require('./based.on.wdio'))();
const instance = require('../module')().selectFramework(wdioBrowser);

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
}(instance.getFramework());

if (instance.getFramework() === playwrightBrowser) {
  afterAll(async () => {
    const Browser = require('../singleton');

    const plPage = await new Browser().tab;
    const browser = await new Browser().browser;

    await plPage.close();
    return browser.close();
  });
}
