const fs = require('fs');
const gm = require('gm');
const request = require('request');

const url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';
const filename = 'js-logo.png';
const thumbnailFilename = 'js-logo-small.png';
const requestOptions = {
  url: url,
  encoding: null
};

function downloadAndCreateThumbnail(url, filename, thumbnailFilename, callback) {
    request(requestOptions, (err, response, data) => {
    if (err) {
        console.log(err.message);
        return;
    }
    fs.writeFile(filename, data, (err) => {
        if (err) {
        console.log(err.message);
        return;
        }
        gm(filename)
        .resize(240, 240)
        .write(thumbnailFilename, (err) => {
            if (err) {
            console.log(err.message);
            return;
            }
            console.log('It worked');

            callback();
        });
    });
    });
};
//downloadAndCreateThumbnail(url, filename, thumbnailFilename);

module.exports = { downloadAndCreateThumbnail };