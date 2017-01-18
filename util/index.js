const process = require('process');

module.exports.parseOctal = function parseOctal (str) {
  var oct = 0;
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c > '7' || c < '0') {
      throw new Error("invalid octal string");
    }
    oct *= 8;
    oct += c - '0';
  }
  return oct;
};
