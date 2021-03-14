const Browser = require('../singleton');

class PlaywrightBrowser {
  async goUrl(url) {
    const plBrowser = await new Browser().session;
    const plPage = await plBrowser.newPage();

    await plPage.goto(url);
    expect(await plPage.title()).toBe('XYZ Bank');

    return plPage.close();
    // return this.closeBr();
  }

  async clickOn(locator) {
    await this.waitForElement(locator);
    return this.plPage(locator);
  }

  async fillData(locator, data) {
    await this.waitForElement(locator);
    return page.fill(locator, data);
  }

  async checkAlert() {
    // const checkAlertText = browser.getAlertText().includes('Customer added successfully with customer');
    // expect(checkAlertText).toBe(true);
    await this.plPage.close();
    return this.closeBr();
  }

  async fillNewCustomerData(firstName, lastName, code) {
    await this.fillData('[placeholder="First Name"]', firstName);
    await this.fillData('[placeholder="Last Name"]', lastName);
    await this.fillData('[placeholder="Post Code"]', code);
  }

  async waitForElement(locator) {
    return this.plPage.waitForSelector(locator);
  }

  async closeBr() {
    const plBrowser = await new Browser().session;

    return plBrowser.close();
  }
}

module.exports = PlaywrightBrowser;
