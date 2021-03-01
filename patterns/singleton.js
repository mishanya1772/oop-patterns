class Singleton {
  constructor() {
    if (Singleton._instance) {
      return Singleton._instance;
    }

    this.base = browser.getWindowHandles()[0];
    this.new = browser.getWindowHandles()[1];

    Singleton._instance = this;
  }
}

module.exports = Singleton;
