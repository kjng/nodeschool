const remote = require('electron').remote;
const picture = require('cat-picture');
const image = require('lightning-image-poly');
const fs = require('fs');

const src = picture.src;
picture.remove();

const viz = new image('#visualization', null, [src], { hullAlgorithm: 'convex' });

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 80) { save(); }
});

function save() {
  remote.getCurrentWindow().webContents.printToPDF({
    portrait: true
  }, function(err, data) {
    fs.writeFile('annotation.pdf', data, function(err) {
      if (err) {
        alert('Error generating PDF! ' + err.message);
      } else {
        alert('PDF saved!');
      }
    })
  });
}
