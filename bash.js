const fs = require('fs');
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  const parsedCmd = cmd.split(' ');

  if (parsedCmd[0] === 'pwd') pwd();
  if (parsedCmd[0] === 'ls') ls();
  if (parsedCmd[0] === 'cat') {
    for (let i = 1; parsedCmd[i] !== undefined; i++) {
      cat(parsedCmd[i]);
    }
  }
  if (parsedCmd[0] === 'curl') curl(parsedCmd[1]);

  setTimeout(function() {
    process.stdout.write('\nprompt > ');
  }, 500);
});

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write('\n prompt >');
}

module.exports = done;
