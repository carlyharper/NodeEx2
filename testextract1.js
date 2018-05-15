const save = require('./extract1module.js');

save.saveWebPage('http://someurl.com', 'filename.txt', () => {
    console.log('file saved');
});