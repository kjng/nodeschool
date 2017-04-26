var http = require('http');
var urls = process.argv.slice(2);
var urlsLeft = 3;
var dataArray = [];

urls.forEach(function(url, i) {
  http.get(url, function(res) {
    res.setEncoding('utf8');
    dataArray[i] = dataArray[i] || '';

    res.on('data', function(data) {
      dataArray[i] += data;
    });

    res.on('end', function() {
      urlsLeft -= 1;
      if (urlsLeft === 0) {
        dataArray.forEach(function(datem) {
          console.log(datem);
        });
      }
    });
  });
});