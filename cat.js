const fs = require('fs');
const done = require('./bash');

module.exports = function(file) {
  fs.readFile('./' + file, 'utf8', (err, data) => {
    if (err) {
      done(err);
    } else {
      done(data + '\n');
    }
  });
};
