const got = require('got');

module.exports = new class Api {
  constructor(url) {
    this.url = url;
  }

  prepareUrl(data = 'http://api.postcodes.io/random/postcodes?') {
    this.url = data;
    return this;
  }

  latitude(data = '-2.302836') {
    this.url += `&lon=-${data}`;
    return this;
  }

  longitude(data = '53.455654') {
    this.url += `&lan=-${data}`;
    return this;
  }

  async send() {
    const response = await got(this.url);

    return JSON.parse(response.body).result.postcode;
  }
};
