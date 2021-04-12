const Browser = require('../singleton');

class PlaywrightBrowser {
  alertDialog;
  page;

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

  async checkAlert() {
    expect(await this.alertDialog.includes('Customer added successfully with customer')).toBe(true);
  }

  async fillNewCustomerData(firstName, lastName, code) {
    await this.fillData('[placeholder="First Name"]', firstName);
    await this.fillData('[placeholder="Last Name"]', lastName);
    return this.fillData('[placeholder="Post Code"]', code);
  }

  async waitForElement(locator) {
    return this.page.waitForSelector(locator);
  }
}

module.exports = PlaywrightBrowser;
