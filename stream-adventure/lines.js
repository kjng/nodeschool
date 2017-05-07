var split = require('split');
var through = require('through2');

var counter = 0;

var stream = through(function(line, encoding, next) {
  counter++;
  if (counter % 2 === 0) {
    this.push(line.toString().toUpperCase() + '\n');
  } else {
    this.push(line.toString().toLowerCase() + '\n');
  }
  next();
});

process.stdin
  .pipe(split())
  .pipe(stream)
  .pipe(process.stdout);
