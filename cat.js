const fs = require('fs');

module.exports = function(file) {
  fs.readFile('./' + file, 'utf8', (err, data) => {
    if (err) {
      throw err
    } else {
      process.stdout.write(data);
      process.stdout.write("\nprompt > ");
    }
  })
}
