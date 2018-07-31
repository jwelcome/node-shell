const fs = require('fs');
const request = require('request');
const done = require('./bash');

module.exports = function(url) {
  request(url, function(err, response, body) {
    if (err) done(err);
    if (response) done('statusCode: ' + response && response.statusCode);
    if (body) done('body: ' + body);
  });
};
