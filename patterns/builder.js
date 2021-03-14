class Builder {
  constructor(firstName, lastName, postCode) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.postCode = postCode;
  }

  clickOn(locator) {
    browser.waitUntil(() => $(locator).isDisplayed() === true);
    $(locator).click();
    return this;
  }

  fillNewCustomerData() {
    $('[placeholder="First Name"]').setValue(this.firstName);
    $('[placeholder="Last Name"]').setValue(this.lastName);
    $('[placeholder="Post Code"]').setValue(this.postCode);
    return this;
  }

  checkAlert() {
    const checkAlertText = browser.getAlertText().includes('Customer added successfully with customer');
    expect(checkAlertText).toBe(true);
    return this;
  }
}

module.exports = Builder;
