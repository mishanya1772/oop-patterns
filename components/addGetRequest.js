const got = require('got');

module.exports = function (apiContract) {
  apiContract.getRequest = async function () {
    const response = await got(apiContract.url);

    return JSON.parse(response.body).result.postcode;
  };

  return apiContract;
};
