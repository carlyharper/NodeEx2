var url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';
var filename = 'js-logo.png';
var thumbnailFilename = 'js-logo-small.png';

downloadAndCreateThumbnail(url, filename, thumbnailFilename, (err) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('It worked');
});