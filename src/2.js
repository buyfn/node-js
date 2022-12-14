const fs = require('fs');
const csv = require('csvtojson');
const stream = require('node:stream');

const inFilePath = process.argv[2]
const outFilePath = process.argv[3]

stream.pipeline(
  fs.createReadStream(inFilePath),
  csv(),
  fs.createWriteStream(outFilePath),
  (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('finished');
    }
  },
);
