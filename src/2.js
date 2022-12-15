import * as fs from 'fs';
import { csv } from 'csvtojson';
import { pipeline } from 'node:stream';

const inFilePath = process.argv[2]
const outFilePath = process.argv[3]

pipeline(
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
