const fs = require('fs');
const request = require('request');

module.exports = function(url) {
  request(url, function(err, response, body) {
    if (err) throw err;
    console.log(response, response.statusCode, body);
    if (response) process.stdout.write('statusCode: ' + response);
    // if (body) process.stdout.write('body: ' + body);
  });
};
