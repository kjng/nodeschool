var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var splitByNewlines = str.split('\n');

console.log(splitByNewlines.length - 1);