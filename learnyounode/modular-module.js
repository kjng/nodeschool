var fs = require('fs');
var path = require('path');

module.exports = function(directory, extension, callback) {
  if (extension[0] !== '.') {
    extension = '.' + extension;
  }

  fs.readdir(directory, function(err, files) {
    if (err) {
      callback(err);
    } else {
      callback(null, files.filter(function(filename) {
        return path.extname(filename) === extension;
      }));
    }
  });
};