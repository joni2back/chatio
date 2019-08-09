const fs = require('fs');

module.exports = function(sessid) {
    return fs.existsSync('/sessions/' + sessid);
};