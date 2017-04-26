var myModule = require('./modular-module');

myModule(process.argv[2], process.argv[3], function(err, files) {
  if (err) {
    console.error(err);
  } else {
    files.forEach(function(file) {
      console.log(file);
    });
  }
});