import * as readline from 'node:readline';

const reverse = str => [...str].reverse().join('');

const rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', (line) => {
  console.log(reverse(line));
});
