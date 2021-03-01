class TabsRecord {
  constructor() {
    if (TabsRecord._instance) {
      return TabsRecord._instance;
    }

    this.base = browser.getWindowHandles()[0];
    this.new = browser.getWindowHandles()[1];

    TabsRecord._instance = this;
  }
}

module.exports = TabsRecord;
