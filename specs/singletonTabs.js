const assert = require('assert');
const TabsRecord = require('../patterns/singleton');
const Base = require('../components/basePage');
const baseUrl = 'https://playwright.dev/';

describe('Singleton pattern', () => {
  it('should switch tabs base on the session', () => {
    browser.url(baseUrl);
    browser.waitUntil(() => $(Base.locators.githubIcon).isDisplayed());
    $(Base.locators.githubIcon).click();
    new TabsRecord();

    browser.switchToWindow(new TabsRecord().new);
    assert.strictEqual(browser.getUrl(), 'https://github.com/microsoft/playwright');

    browser.switchToWindow(new TabsRecord().base);
    assert.strictEqual(browser.getUrl(), baseUrl);
  });
});
