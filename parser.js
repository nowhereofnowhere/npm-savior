import fs from 'fs';

const parse = (filePath) => {
  let json = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  return json;
};

export default parse;