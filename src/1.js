const readline = require('node:readline');

const reverse = str => [...str].reverse().join('');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  console.log(reverse(line));
});
