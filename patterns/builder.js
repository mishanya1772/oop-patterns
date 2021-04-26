class PostcodeContract {
  constructor() {
    this.url = 'http://api.postcodes.io/';
  }

  byCoordinates(lat = '-2.302836', lon = '53.455654') {
    this.url += `?lon=${lat}&lat=${lon}`;
    return this;
  }

  random() {
    this.url += 'random/postcodes';
    return this;
  }

  outcodes() {
    this.url += 'outcodes';
    return this;
  }
}

module.exports = PostcodeContract;
