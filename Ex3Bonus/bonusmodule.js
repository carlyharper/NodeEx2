const fs = require('fs');
const gm = require('gm');
const request = require('request');

var options = {
    url: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    encoding: null
};

const thumbnailFilename = 'resized.png';

function bonus(options, callback) {
    request(options, function(err, response, imageData) {
        if (err) {
            console.log(err.message);
            return;
        }
        gm(imageData)
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
};

// bonus(options);

module.exports = { bonus };