const Browser = require('../singleton');

class PlaywrightBrowser {
  alertDialog;

  async goUrl(url) {
    const plPage = await new Browser().tab;

    await plPage.goto(url);
    expect(await plPage.title()).toBe('XYZ Bank');

    plPage.on('dialog', async (dialog) => {
      this.alertDialog = await dialog.message();
      await dialog.accept();
    });
  }

  async clickOn(locator) {
    const plPage = await new Browser().tab;

    await this.waitForElement(locator);
    return plPage.click(locator);
  }

  async fillData(locator, data) {
    const plPage = await new Browser().tab;

    await this.waitForElement(locator);
    return plPage.fill(locator, data);
  }

  async checkAlert() {
    expect(await this.alertDialog.includes('Customer added successfully with customer')).toBe(true);
  }

  async fillNewCustomerData(firstName, lastName, code) {
    await this.fillData('[placeholder="First Name"]', firstName);
    await this.fillData('[placeholder="Last Name"]', lastName);
    return this.fillData('[placeholder="Post Code"]', code);
  }

  async waitForElement(locator) {
    const plPage = await new Browser().tab;

    return plPage.waitForSelector(locator);
  }
}

afterAll(async () => {
  const plPage = await new Browser().tab;
  const browser = await new Browser().browser;

  await plPage.close();
  return browser.close();
});

module.exports = PlaywrightBrowser;
