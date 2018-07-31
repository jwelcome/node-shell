const fs = require('fs');
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  const parsedCmd = cmd.split(' ');

  if (parsedCmd[0] === 'pwd') pwd();
  if (parsedCmd[0] === 'ls') ls();
  if (parsedCmd[0] === 'cat') cat(parsedCmd[1]);
});
