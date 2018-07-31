const done = require('./bash');

console.log(done);

module.exports = function(done) {
  done(__dirname);
};
