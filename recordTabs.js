class RecordTabs {
  constructor() {
    if (RecordTabs._instance) {
      return RecordTabs._instance;
    }

    this.base = browser.getWindowHandles()[0];
    this.new = browser.getWindowHandles()[1];

    RecordTabs._instance = this;
  }
}

module.exports = RecordTabs;
