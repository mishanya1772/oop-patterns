class WDIOBrowser {
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

  async checkAlert() {
    const checkAlertText = await browser.getAlertText();
    expect(checkAlertText.includes('Customer added successfully with customer')).toBe(true);
  }

  async fillNewCustomerData(firstName, lastName, code) {
    await this.fillData('[placeholder="First Name"]', firstName);
    await this.fillData('[placeholder="Last Name"]', lastName);
    return this.fillData('[placeholder="Post Code"]', code);
  }
}

module.exports = WDIOBrowser;
