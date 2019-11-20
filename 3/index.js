const fs = require('fs');
const util = require('util');

const readFilePromise = util.promisify(fs.readFile);

async function readAlmaTxt() {
  const content = await readFilePromise('./alma.txt');

  console.log(content);
}

readAlmaTxt();
