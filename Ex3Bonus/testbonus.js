const save = require('./bonusmodule.js');

var options = {
    url: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    encoding: null
};

save.bonus(options, () => {
    console.log('file saved');
});