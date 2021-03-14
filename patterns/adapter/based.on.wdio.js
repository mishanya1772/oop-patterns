class WDIOBrowser {
  goUrl(url) {
    browser.url(url);
    expect(browser.getTitle()).toBe('XYZ Bank');
  }

  clickOn(locator) {
    this.waitForElement(locator);
    return $(locator).click();
  }

  fillData(locator, data) {
    this.waitForElement(locator);
    return $(locator).setValue(data);
  }

  checkAlert() {
    const checkAlertText = browser.getAlertText().includes('Customer added successfully with customer');
    expect(checkAlertText).toBe(true);
  }

  fillNewCustomerData(firstName, lastName, code) {
    this.fillData('[placeholder="First Name"]', firstName);
    this.fillData('[placeholder="Last Name"]', lastName);
    this.fillData('[placeholder="Post Code"]', code);
  }

  waitForElement(locator) {
    return browser.waitUntil(() => $(locator).isDisplayed() === true);
  }
}

module.exports = WDIOBrowser;
